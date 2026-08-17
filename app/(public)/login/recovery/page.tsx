import Link from "next/link";

import { RecoveryForm } from "@/components/auth/RecoveryForm";
import { T } from "@/components/shell/T";

export const metadata = { title: "Recuperar acesso" };

export default async function RecoveryPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <div className="space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight"><T>Recuperar acesso</T></h1>
        <p className="text-sm text-muted-foreground">
          <T>Use um código de recuperação para reconfigurar sua autenticação em duas etapas.</T>
        </p>
      </div>
      <RecoveryForm next={next} />
      <div className="text-center text-sm">
        <Link
          href={next ? `/login?next=${encodeURIComponent(next)}` : "/login"}
          className="text-muted-foreground underline-offset-4 hover:underline"
        >
          <T>Voltar ao login</T>
        </Link>
      </div>
    </div>
  );
}
