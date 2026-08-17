import { requireAuth, isMfaEnrolled } from "@/lib/auth/server";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/shell/PageHeader";
import { T } from "@/components/shell/T";
import { SecurityClient } from "./_client";

export const dynamic = "force-dynamic";

export default async function SecurityPage() {
  await requireAuth();
  const enrolled = await isMfaEnrolled();

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <PageHeader title="Segurança" subtitle="MFA, recovery codes e sessões." />

      <Card className="space-y-2 p-6">
        <h2 className="text-sm font-semibold">MFA (TOTP)</h2>
        <p className="text-sm">
          {enrolled ? (
            <span className="text-green-600">
              <T>Ativado.</T>
            </span>
          ) : (
            <span className="text-amber-600">
              <T>Não ativado.</T>
            </span>
          )}
        </p>
        {!enrolled && (
          <p className="text-xs text-muted-foreground">
            <T>Faça login novamente para iniciar o enrolamento.</T>
          </p>
        )}
      </Card>

      <SecurityClient mfaEnrolled={enrolled} />
    </div>
  );
}
