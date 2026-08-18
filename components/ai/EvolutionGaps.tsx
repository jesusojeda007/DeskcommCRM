"use client";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { CheckCircle, Warning } from "@/lib/ui/icons";
import { useT } from "@/hooks/i18n/useT";
import type { LeadStage } from "@/lib/agent-engine/agent/lead-state";
import type { EvolutionPayload } from "@/lib/ai/evolution/aggregate";
import { ROTULO_DO_PASSO } from "@/lib/leads/agent-mapping";

/**
 * `montaLacunas`/`boaNoticia` são chamadas direto pelos testes de
 * `tests/unit/evolution-gaps-copy.test.ts` SEM passar `t` — o teste asserta o
 * texto em português exato. Por isso `t` é opcional e o padrão (`semTraducao`)
 * só substitui `{var}`, igual `traduzir()` faz para `pt-BR`: chamar sem `t`
 * continua devolvendo a mesma frase de sempre, e o componente é quem passa o
 * `t` de verdade (de `useT()`) para render traduzido.
 */
type Traduzir = (texto: string, vars?: Record<string, string | number>) => string;

function semTraducao(texto: string, vars?: Record<string, string | number>): string {
  if (!vars) return texto;
  return Object.entries(vars).reduce((acc, [chave, valor]) => acc.split(`{${chave}}`).join(String(valor)), texto);
}

/**
 * Cada lacuna vira UMA frase que diz o problema e o conserto — número sem ação é
 * o "dado que não muda decisão" que a doutrina do sistema vivo proíbe.
 *
 * Duas honestidades que o texto tem que carregar, porque o dado tem:
 *  1. "não encontrou nada" CONTÉM "quase encontrou" — o agregador conta o quase-
 *     acerto dentro do mesmo laço das buscas sem resultado. Somar os dois como se
 *     fossem problemas separados infla a lacuna; por isso o segundo item começa
 *     com "Destas".
 *  2. lista vazia NÃO é boa notícia por si. Cada frase de elogio é uma afirmação
 *     sobre uma fonte diferente e só sai com a evidência daquela fonte — ver o
 *     docblock de `boaNoticia`, que é onde a regra vive.
 */

/**
 * Os passos do atendimento em português de dono de negócio.
 *
 * ⚠️ VÊM DE `ROTULO_DO_PASSO`, e este arquivo NÃO tem a sua própria tradução.
 * A tela que conserta a lacuna (Funis) lista os passos por esses mesmos nomes; se
 * cada lado traduzisse o enum à sua maneira, o dono da clínica leria "entendendo
 * o que ele precisa" aqui, clicaria no botão e procuraria essa linha numa tela
 * que a chama "Em qualificação". Um nome por coisa é o que faz o botão levar a
 * algum lugar reconhecível.
 */
function nomeiaPassos(steps: string[]): string {
  return steps.map((s) => ROTULO_DO_PASSO[s as LeadStage] ?? s).join(", ");
}

interface Lacuna {
  chave: string;
  texto: string;
  href?: string;
  cta?: string;
}

/**
 * ⚠️ A PROMESSA "VOCÊ MESMO ESCOLHE" NÃO VALE PARA GANHO E PERDA.
 *
 * A tela de destino só oferece etapa de fechamento para «Ganho» e de perda para
 * «Perdido» (é o CHECK da 0084), e `is_won`/`is_lost` não são escritos por tela
 * nenhuma do produto. Num funil sem essas etapas, o usuário clica num botão que
 * promete que ele resolve e recebe "quem montou o funil precisa marcar". A
 * ressalva sai apenas quando um desses dois passos está na lacuna — anexá-la
 * sempre seria ruído no caso comum.
 */
function ressalvaDeFechamento(steps: string[], t: Traduzir): string {
  const fechamento = steps.filter((s) => s === "won" || s === "lost");
  if (fechamento.length === 0) return "";
  const nomes = fechamento.map((s) => `«${ROTULO_DO_PASSO[s as LeadStage]}»`).join(" e ");
  return fechamento.length === 1
    ? " " +
        t(
          "{nomes} é exceção: ele só pode apontar para a etapa de fechamento ou de perda do funil. Se o seu funil não tem essas etapas, isso é com quem instalou o sistema.",
          { nomes },
        )
    : " " +
        t(
          "{nomes} são exceção: eles só podem apontar para a etapa de fechamento ou de perda do funil. Se o seu funil não tem essas etapas, isso é com quem instalou o sistema.",
          { nomes },
        );
}

export function montaLacunas(gaps: EvolutionPayload["gaps"], t: Traduzir = semTraducao): Lacuna[] {
  const out: Lacuna[] = [];

  for (const p of gaps.unmapped_agent_steps) {
    const n = p.steps.length;
    const passos = nomeiaPassos(p.steps);
    out.push({
      chave: `unmapped-${p.pipeline_name}`,
      // ⚠️ Este item NÃO afirma defeito, e isso é deliberado. A migration 0084 diz
      // com todas as letras que um passo sem etapa é estado LEGÍTIMO ("Em separação"
      // e "Pós-venda" não correspondem a passo nenhum do agente, e forçar mapeamento
      // seria inventar semântica que o tenant não declarou). Escrever "conserte isto"
      // mandaria o dono da clínica arrumar um funil que já está certo. O texto conta
      // a CONSEQUÊNCIA e devolve a decisão para quem conhece o próprio negócio.
      //
      // "card" e não "cartão": é o nome que a tela do conserto usa na opção
      // «Não mover o card». Um objeto, um nome — senão o usuário lê sobre
      // "cartão" aqui e procura essa palavra lá.
      texto:
        (n === 1
          ? t(
              'No funil "{pipeline_name}", {n} passo do atendimento não tem etapa correspondente: {passos}. Quando o agente chega em um desses passos, o card do cliente não se move — ele fica onde está. Às vezes isso é proposital: nem todo funil precisa de uma etapa para cada passo. Mas se você esperava ver esses clientes andarem sozinhos no quadro, é aqui que falta o vínculo — e você mesmo escolhe, passo a passo, para qual etapa o card vai.',
              { pipeline_name: p.pipeline_name, n, passos },
            )
          : t(
              'No funil "{pipeline_name}", {n} passos do atendimento não têm etapa correspondente: {passos}. Quando o agente chega em um desses passos, o card do cliente não se move — ele fica onde está. Às vezes isso é proposital: nem todo funil precisa de uma etapa para cada passo. Mas se você esperava ver esses clientes andarem sozinhos no quadro, é aqui que falta o vínculo — e você mesmo escolhe, passo a passo, para qual etapa o card vai.',
              { pipeline_name: p.pipeline_name, n, passos },
            )) + ressalvaDeFechamento(p.steps, t),
      // ⚠️ ESTE LINK É O QUE FECHA O CICLO. Antes ele apontava para o quadro com o
      // verbo "Ver", porque não existia lugar nenhum no produto para escrever
      // `agent_stage_hint` — o painel relatava uma lacuna e parava aí. Agora leva
      // à tela que a conserta, e o verbo diz o que se faz lá.
      href: "/app/settings/tenant/pipelines",
      cta: t("Escolher a etapa de cada passo"),
    });
  }

  if (gaps.knowledge_empty > 0) {
    const n = gaps.knowledge_empty;
    out.push({
      chave: "knowledge-empty",
      texto:
        n === 1
          ? t(
              "{n} pergunta de cliente não encontrou resposta nos seus materiais. São os assuntos que ainda faltam escrever — cada um deles é uma conversa em que o agente teve que improvisar ou passar adiante.",
              { n },
            )
          : t(
              "{n} perguntas de clientes não encontraram resposta nos seus materiais. São os assuntos que ainda faltam escrever — cada um deles é uma conversa em que o agente teve que improvisar ou passar adiante.",
              { n },
            ),
      href: "/app/ai/knowledge/sources",
      cta: t("Abrir a base de conhecimento"),
    });
  }

  if (gaps.knowledge_near_misses > 0) {
    const n = gaps.knowledge_near_misses;
    out.push({
      chave: "knowledge-near",
      texto:
        n === 1
          ? t(
              "Destas, {n} chegou perto: havia material parecido, mas não parecido o bastante para o agente arriscar usar. Aqui o conteúdo provavelmente já existe — só está escrito com palavras diferentes das que o cliente usa. Vale reescrever esses materiais com as perguntas do jeito que chegam.",
              { n },
            )
          : t(
              "Destas, {n} chegaram perto: havia material parecido, mas não parecido o bastante para o agente arriscar usar. Aqui o conteúdo provavelmente já existe — só está escrito com palavras diferentes das que o cliente usa. Vale reescrever esses materiais com as perguntas do jeito que chegam.",
              { n },
            ),
      href: "/app/ai/knowledge/sources",
      cta: t("Abrir a base de conhecimento"),
    });
  }

  if (gaps.router_no_match > 0) {
    const n = gaps.router_no_match;
    out.push({
      chave: "router-no-match",
      texto:
        n === 1
          ? t(
              "Em {n} conversa o agente não soube para qual atendimento encaminhar e usou o atendimento padrão. Se isso se repete, falta cadastrar esse assunto no roteador do seu número.",
              { n },
            )
          : t(
              "Em {n} conversas o agente não soube para qual atendimento encaminhar e usou o atendimento padrão. Se isso se repete, falta cadastrar esse assunto no roteador do seu número.",
              { n },
            ),
      href: "/app/ai/routers",
      cta: t("Abrir os roteadores"),
    });
  }

  if (gaps.router_failed > 0) {
    const n = gaps.router_failed;
    out.push({
      chave: "router-failed",
      texto:
        n === 1
          ? t(
              "Em {n} conversa a leitura falhou por problema técnico, e ela caiu no atendimento padrão. Isso não é configuração: é a IA que não respondeu na hora. Se o número for alto, vale conferir a conexão com o provedor de IA.",
              { n },
            )
          : t(
              "Em {n} conversas a leitura falhou por problema técnico, e ela caiu no atendimento padrão. Isso não é configuração: é a IA que não respondeu na hora. Se o número for alto, vale conferir a conexão com o provedor de IA.",
              { n },
            ),
      href: "/app/ai/credentials",
      cta: t("Conferir a conexão de IA"),
    });
  }

  return out;
}

/**
 * A boa notícia é feita de TRÊS afirmações independentes, e cada uma precisa da
 * sua própria evidência:
 *   • "toda pergunta encontrou resposta"  ← só vale se houve busca na base;
 *   • "toda conversa achou para onde ir"  ← só vale se houve decisão de rota;
 *   • "todo passo tem etapa que o recebe" ← só vale se EXISTE funil. A lacuna
 *     deriva das linhas de `crm_stages`: zero funis ⇒ zero lacunas, e o elogio
 *     seria sobre funis que não existem. E como o instalador não provisiona
 *     funil nenhum, esse é justamente o estado de instalação fresca.
 *
 * Um guarda único autorizaria as três com a evidência de uma: um tenant com
 * roteador configurado e base VAZIA tem decisões > 0 e a tela afirmaria "toda
 * pergunta encontrou resposta nos seus materiais" tendo havido ZERO perguntas.
 * O guarda tem que ter o tamanho da afirmação.
 */
export function boaNoticia(
  buscas: number,
  decisoes: number,
  funis: number,
  t: Traduzir = semTraducao,
): string {
  const partes: string[] = [];
  if (buscas > 0) partes.push(t("toda pergunta encontrou resposta nos seus materiais"));
  if (decisoes > 0) partes.push(t("toda conversa achou para onde ir"));
  if (funis > 0) partes.push(t("todo passo do atendimento tem uma etapa do funil que o recebe"));

  const faltando: string[] = [];
  if (buscas === 0) faltando.push(t("ninguém consultou sua base de conhecimento"));
  if (decisoes === 0) faltando.push(t("nenhuma conversa foi encaminhada"));
  if (funis === 0) faltando.push(t("você ainda não tem nenhum funil montado"));

  // Nenhuma evidência: a tela não tem o que elogiar, e dizer "nada travando"
  // seco seria elogio. Abre pelo motivo, não pela boa notícia.
  if (partes.length === 0) {
    return t("Ainda não dá para dizer se algo está travando: {faltando}. Volte aqui depois que seu agente tiver atendido.", {
      faltando: faltando.join(", "),
    });
  }
  const frase = t("Nada travando neste período: {partes}.", { partes: partes.join(", ") });
  if (faltando.length === 0) return frase;
  return t("{frase} Uma ressalva: {faltando} — sobre isso não dá para dizer nem que está bem nem que está mal.", {
    frase,
    faltando: faltando.join(", "),
  });
}

export function EvolutionGaps({
  gaps,
  buscas,
  decisoes,
}: {
  gaps: EvolutionPayload["gaps"];
  /** Consultas à base no período — evidência da 1ª afirmação de `boaNoticia`. */
  buscas: number;
  /** Decisões de encaminhamento no período — evidência da 2ª afirmação. */
  decisoes: number;
}) {
  const t = useT();
  const lacunas = montaLacunas(gaps, t);

  if (lacunas.length === 0) {
    return (
      <Card className="flex items-start gap-3 p-5" data-testid="gaps-vazio">
        <CheckCircle size={20} className="mt-0.5 shrink-0 text-success-fg" aria-hidden />
        <p className="text-sm leading-relaxed">
          {boaNoticia(buscas, decisoes, gaps.pipelines_evaluated, t)}
        </p>
      </Card>
    );
  }

  return (
    <ul className="flex flex-col gap-3" data-testid="gaps-lista">
      {lacunas.map((l) => (
        <li key={l.chave}>
          <Card className="flex items-start gap-3 p-5">
            <Warning size={20} className="mt-0.5 shrink-0 text-warning-fg" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-relaxed">{l.texto}</p>
              {l.href && (
                <Link
                  href={l.href}
                  className="mt-2 inline-block text-sm font-medium text-accent underline underline-offset-4"
                >
                  {l.cta}
                </Link>
              )}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
