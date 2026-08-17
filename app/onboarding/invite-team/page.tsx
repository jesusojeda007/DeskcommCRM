import { isEmailConfigured } from "@/lib/email/resend";
import { InviteTeamForm } from "./_form";
import { T } from "@/components/shell/T";

export const dynamic = "force-dynamic";

export default function InviteTeamPage() {
  const emailReady = isEmailConfigured();
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">
          <T>Convidar time</T>
        </h2>
        <p className="text-sm text-muted-foreground">
          <T>Cole até 20 emails (um por linha) e escolha a role compartilhada.</T>
        </p>
      </header>
      {!emailReady ? (
        <div className="rounded-md border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-100">
          <p className="font-medium">
            <T>Resend não configurado.</T>
          </p>
          <p className="mt-1">
            <T>Convites serão registrados localmente, mas o email não será enviado. Configure</T>{" "}
            <code className="mx-1">RESEND_API_KEY</code> <T>para envio real.</T>
          </p>
        </div>
      ) : null}
      <InviteTeamForm />
    </div>
  );
}
