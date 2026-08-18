"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useT } from "@/hooks/i18n/useT";

/**
 * Cadastro de fonte de conhecimento pela tela.
 *
 * O botão que existia aqui era um stub: `disabled` fixo com um toast "Em
 * breve." que, por estar desabilitado, nunca aparecia. A API
 * (POST /api/v1/ai/knowledge/sources) sempre funcionou e já aceita markdown —
 * ela mesma converte em itens de FAQ. Faltava só a tela.
 *
 * Um único campo de texto em vez de um editor de itens: o formato de duas
 * linhas por pergunta é o que alguém consegue colar de um documento que já
 * tem, e é o que a API parseia. Editor item-a-item viria depois, se pedirem.
 */
const EXEMPLO = `## Pergunta: Qual o prazo de entrega?
## Resposta: De 2 a 3 dias úteis após a confirmação do pagamento.

## Pergunta: Vocês fazem troca?
## Resposta: Sim, em até 30 dias, com o produto sem uso.`;

interface Props {
  agentId: string;
  tipo: "faq" | "policy" | "conversations" | "catalog";
  rotulo: string;
  aberto: boolean;
  onFechar: () => void;
  onCriada: () => void;
}

export function NovaFonteDialog({ agentId, tipo, rotulo, aberto, onFechar, onCriada }: Props) {
  const t = useT();
  const rotuloTraduzido = t(rotulo);
  const [nome, setNome] = useState(t("{rotulo} da loja", { rotulo: rotuloTraduzido }));
  const [conteudo, setConteudo] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function criar() {
    if (conteudo.trim().length === 0) {
      toast.error(t("Cole o conteúdo antes de criar."));
      return;
    }
    setEnviando(true);
    try {
      const res = await fetch("/api/v1/ai/knowledge/sources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_id: agentId,
          // 'conversations'/'catalog' não têm ingestão de texto colado; o que a
          // API converte é o formato de FAQ, então o tipo enviado é o que ela
          // sabe tratar. O rótulo do cartão continua sendo o do slot.
          source_type: tipo === "policy" ? "policy" : "faq",
          name: nome.trim(),
          markdown_blob: conteudo,
        }),
      });
      const json = (await res.json()) as { error?: { message?: string } };
      if (!res.ok) {
        toast.error(json.error?.message ?? t("Não consegui criar a fonte."));
        return;
      }
      toast.success(t("Fonte criada. A indexação começa em instantes."));
      onCriada();
      onFechar();
    } catch {
      toast.error(t("Não consegui falar com o servidor."));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <Dialog open={aberto} onOpenChange={(v) => !v && onFechar()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("Cadastrar {rotulo}", { rotulo: rotuloTraduzido.toLowerCase() })}</DialogTitle>
          <DialogDescription>
            {t("Cole as perguntas e respostas. O agente passa a consultar isso antes de responder.")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fonte-nome">{t("Nome da fonte")}</Label>
            <Input id="fonte-nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fonte-conteudo">{t("Conteúdo")}</Label>
            <Textarea
              id="fonte-conteudo"
              rows={12}
              placeholder={EXEMPLO}
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
            {/*
              `## Pergunta:` / `## Resposta:` são marcadores literais que o parser
              do backend exige (`parseFaqMarkdown`, sem i18n) — traduzi-los aqui
              faria quem cola em espanhol ser recusado pela API. Só a prosa ao
              redor é traduzida; os marcadores ficam intactos nos dois idiomas.
            */}
            <p className="text-xs text-text-muted">
              {t("Uma linha")} <code>## Pergunta:</code> {t("e uma")} <code>## Resposta:</code>{" "}
              {t("por item, separados por uma linha em branco.")}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onFechar} disabled={enviando}>
            {t("Cancelar")}
          </Button>
          <Button onClick={criar} disabled={enviando}>
            {enviando ? t("Criando…") : t("Criar fonte")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
