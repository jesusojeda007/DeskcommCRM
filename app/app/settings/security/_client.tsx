"use client";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RecoveryCodesPanel } from "@/components/auth/RecoveryCodesPanel";
import { regenerateRecoveryCodes } from "@/app/actions/settings/regenerateRecoveryCodes";
import { signOutEverywhere } from "@/app/actions/settings/signOutEverywhere";
import { useT } from "@/hooks/i18n/useT";

export function SecurityClient({ mfaEnrolled }: { mfaEnrolled: boolean }) {
  const t = useT();
  const [codes, setCodes] = useState<string[] | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSigningOut, startSignOut] = useTransition();

  function handleRegenerate() {
    if (
      !confirm(
        t("Gerar novos códigos invalida TODOS os atuais. Tem certeza?"),
      )
    ) {
      return;
    }
    startTransition(async () => {
      const r = await regenerateRecoveryCodes();
      if (r.ok) {
        setCodes(r.recovery_codes);
        toast.success(t("Novos códigos gerados."));
      } else {
        toast.error(`${t("Erro:")} ${r.error}`);
      }
    });
  }

  function handleSignOutAll() {
    if (!confirm(t("Sair de TODOS os dispositivos? Você precisará fazer login de novo."))) return;
    startSignOut(async () => {
      await signOutEverywhere();
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="space-y-3 p-6">
        <h2 className="text-sm font-semibold">{t("Códigos de recuperação")}</h2>
        <p className="text-xs text-muted-foreground">
          {t("Use se perder acesso ao autenticador. Cada código é de uso único.")}
        </p>
        {codes ? (
          <RecoveryCodesPanel codes={codes} onAcknowledge={() => setCodes(null)} />
        ) : (
          <Button
            variant="outline"
            disabled={!mfaEnrolled || isPending}
            onClick={handleRegenerate}
          >
            {isPending ? t("Gerando…") : t("Regenerar códigos de recuperação")}
          </Button>
        )}
        {!mfaEnrolled && (
          <p className="text-xs text-muted-foreground">
            {t("Habilite MFA antes de gerar códigos.")}
          </p>
        )}
      </Card>

      <Card className="space-y-3 p-6">
        <h2 className="text-sm font-semibold">{t("Sessões ativas")}</h2>
        <p className="text-xs text-muted-foreground">
          {t("Listagem de sessões — em breve. Por enquanto, deslogue todos os dispositivos:")}
        </p>
        <Button
          variant="outline"
          disabled={isSigningOut}
          onClick={handleSignOutAll}
        >
          {isSigningOut ? t("Saindo…") : t("Sair de todos os dispositivos")}
        </Button>
      </Card>
    </div>
  );
}
