import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { normalizarIdiomaDoAceite } from "@/lib/i18n/idiomas";
import { T } from "@/components/shell/T";

export default async function ForbiddenPage() {
  // Página estática alcançável sem sessão (proxy, link direto) — sem
  // `user_metadata.locale` pra ler, mesma pista de `app/(public)/layout.tsx`.
  const aceite = (await headers()).get("accept-language");
  return (
    <IdiomaProvider locale={normalizarIdiomaDoAceite(aceite)}>
      <main className="flex min-h-screen items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 text-center">
          <h1 className="text-2xl font-semibold">
            <T>403 — Sem permissão</T>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            <T>Você não tem acesso a essa área.</T>
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Button asChild variant="outline">
              <Link href="/">
                <T>Voltar</T>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/app/inbox">
                <T>Voltar pra Inbox</T>
              </Link>
            </Button>
          </div>
        </Card>
      </main>
    </IdiomaProvider>
  );
}
