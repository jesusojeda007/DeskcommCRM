"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";
import { useT } from "@/hooks/i18n/useT";

interface RecoveryCodesPanelProps {
  codes: string[];
  onAcknowledge: () => void;
}

/**
 * One-time display of recovery codes. User must check the acknowledgement
 * box before completing setup. Codes are shown in a 2x5 mono grid with copy
 * + download options.
 */
export function RecoveryCodesPanel({ codes, onAcknowledge }: RecoveryCodesPanelProps) {
  const t = useT();
  const [acked, setAcked] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(codes.join("\n"));
    if (ok) toast.success(t("Códigos copiados para a área de transferência."));
    else toast.error(t("Não foi possível copiar. Selecione e copie manualmente."));
  };

  const handleDownload = () => {
    const blob = new Blob([codes.join("\n") + "\n"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "deskcommcrm-recovery-codes.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(t("Arquivo baixado."));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border border-border bg-muted/40 p-4">
        <p className="mb-3 text-sm text-muted-foreground">
          {t("Salve esses 10 códigos em um local seguro. Cada um pode ser usado")}{" "}
          <strong>{t("uma única vez")}</strong>{" "}
          {t("para entrar caso você perca acesso ao autenticador. Eles")}{" "}
          <strong>{t("não serão mostrados novamente")}</strong>.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {codes.map((c, i) => (
            <div
              key={i}
              className="rounded border border-border bg-background px-3 py-2 text-center font-mono text-sm tracking-widest"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="button" variant="outline" className="flex-1" onClick={handleCopy}>
          {t("Copiar todos")}
        </Button>
        <Button type="button" variant="outline" className="flex-1" onClick={handleDownload}>
          {t("Baixar .txt")}
        </Button>
      </div>

      <label className="flex cursor-pointer items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={acked}
          onChange={(e) => setAcked(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border"
        />
        <span>{t("Salvei meus códigos em local seguro.")}</span>
      </label>

      <Button
        type="button"
        className={cn("w-full")}
        disabled={!acked}
        onClick={onAcknowledge}
      >
        {t("Concluir")}
      </Button>
    </div>
  );
}
