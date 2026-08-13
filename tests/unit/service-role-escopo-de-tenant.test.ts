import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

/**
 * O gate que faltava na frente do pior modo de falha do produto.
 *
 * `createAdminClient()` usa a service role key, que **bypassa RLS**. A doutrina
 * (CLAUDE.md, anti-pattern nº 10) manda o handler filtrar `organization_id`
 * manualmente, resolvido de fonte confiável — cookie, JWT, segredo de webhook,
 * token de path — e nunca do body. Até aqui essa regra era cumprida por revisão
 * humana: 107 dos 191 route handlers importam o admin client e **nada** reprovava
 * um handler novo que nascesse sem escopo (docs/threat-model.md §T3, item 1 dos
 * riscos abertos de docs/current-state.md).
 *
 * Handler sem escopo é vazamento cross-tenant: o cliente de uma organização vê a
 * conversa da outra. Num produto self-host, quem descobre é o cliente do cliente.
 *
 * O QUE ESTE TESTE MEDE: que todo route handler que usa o admin client menciona
 * o escopo da organização em algum lugar do arquivo.
 *
 * O QUE ELE **NÃO** MEDE — e isto importa mais que o que ele mede: não prova que
 * a query filtra de verdade, nem que o `organization_id` veio de fonte confiável
 * em vez do body. Isso é comportamento, e comportamento se prova em
 * `tests/invariants/` (isolamento RLS com dois tenants reais, job `invariants`
 * do CI). Aqui é uma catraca contra ESQUECIMENTO, não um certificado de
 * isolamento. Ler o verde deste arquivo como "não vaza" é o falso verde que a
 * doutrina chama de falha-em-verde.
 */

const RAIZ = process.cwd();
const BASE = path.join(RAIZ, "app", "api");

/**
 * Handlers que usam o admin client e legitimamente NÃO têm organização — porque
 * a varredura é da plataforma inteira, não de um tenant.
 *
 * Toda entrada carrega o porquê, e o porquê tem de nomear o guard que protege a
 * rota. Sem isso, a allowlist vira o lugar onde se esconde o bug.
 */
const SEM_TENANT: Record<string, string> = {
  "app/api/v1/admin/platform-admins/route.ts":
    "leitura da tabela de super-admins da plataforma, que é transversal a toda org. Guard: requirePlatformAdmin; POST/PATCH/DELETE respondem 405 (Spec 01 §3.4 T-04)",
  "app/api/v1/cron/attendant-heartbeat/route.ts":
    "varredura system-wide de atendentes offline por heartbeat velho — o cron roda para todas as orgs por definição. Guard: Bearer INTERNAL_CRON_SECRET|INTERNAL_SECRET, fail-closed",
  "app/api/v1/cron/event-log-drain/route.ts":
    "drena a fila global de event_log; o escopo de cada evento vive na linha e é aplicado pelo handler que a consome (lib/event-log/drain.ts). Guard: Bearer INTERNAL_CRON_SECRET|INTERNAL_SECRET, fail-closed",
  "app/api/v1/cron/sync-model-catalog/route.ts":
    "concilia o catálogo público de modelos (ai_models), tabela de plataforma sem organization_id. Guard: Bearer INTERNAL_CRON_SECRET|INTERNAL_SECRET, fail-closed",
  "app/api/v1/system/agent/route.ts":
    "heartbeat do agente do HOST (a VPS), que é a instalação inteira e não uma org. Guard: Bearer INTERNAL_CRON_SECRET|INTERNAL_SECRET com timingSafeEqual",
  "app/api/v1/system/update/route.ts":
    "registra o pedido de atualizar o servidor — estado da instalação, não de um tenant. Guard: is_platform_admin via loadAuthUser",
  "app/api/v1/system/version/route.ts":
    "estado da atualização da instalação; entrega o operacional só a is_platform_admin. Guard: loadAuthUser + is_platform_admin",
};

/** Escopo pode aparecer como coluna do banco ou como variável que a carrega. */
const MARCAS_DE_ESCOPO = /organization_id|organizationId|orgId/;

function routeHandlers(dir: string): string[] {
  const encontrados: string[] = [];
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    const completo = path.join(dir, entrada.name);
    if (entrada.isDirectory()) encontrados.push(...routeHandlers(completo));
    else if (entrada.name === "route.ts") encontrados.push(completo);
  }
  return encontrados;
}

function relativo(arquivo: string): string {
  return path.relative(RAIZ, arquivo).split(path.sep).join("/");
}

interface Handler {
  caminho: string;
  fonte: string;
}

const handlersComServiceRole: Handler[] = routeHandlers(BASE)
  .map((arquivo) => ({ caminho: relativo(arquivo), fonte: fs.readFileSync(arquivo, "utf8") }))
  .filter(({ fonte }) => /createAdminClient/.test(fonte));

describe("service role · escopo de tenant", () => {
  it("encontra os handlers que usam o admin client", () => {
    // Se este número for a zero, o filtro quebrou e os testes abaixo passariam
    // vazios — o clássico verde que não mediu nada.
    expect(handlersComServiceRole.length).toBeGreaterThan(50);
  });

  it("todo handler com service role declara o escopo da organização", () => {
    const semEscopo = handlersComServiceRole
      .filter(({ fonte }) => !MARCAS_DE_ESCOPO.test(fonte))
      .map(({ caminho }) => caminho)
      .filter((caminho) => !(caminho in SEM_TENANT));

    expect(
      semEscopo,
      "Handler novo usa createAdminClient (bypassa RLS) sem filtrar organization_id. " +
        "Filtre o escopo, resolvido de fonte confiável (JWT/cookie/segredo), nunca do body — " +
        "ou, se a rota é mesmo da plataforma inteira, adicione-a a SEM_TENANT com a justificativa " +
        "e o guard que a protege.",
    ).toEqual([]);
  });

  it("não deixa entrada obsoleta na allowlist", () => {
    // Arquivo que ganhou escopo (ou sumiu) e continua na lista é dívida que
    // ninguém vê: a próxima rota criada por cópia herda a isenção sem revisão.
    const obsoletas = Object.keys(SEM_TENANT).filter((caminho) => {
      const handler = handlersComServiceRole.find((h) => h.caminho === caminho);
      return handler === undefined || MARCAS_DE_ESCOPO.test(handler.fonte);
    });

    expect(
      obsoletas,
      "Entrada de SEM_TENANT que já não se aplica (o arquivo passou a ter escopo, " +
        "deixou de usar o admin client, ou não existe mais). Remova a linha.",
    ).toEqual([]);
  });
});
