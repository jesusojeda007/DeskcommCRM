import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { T } from "@/components/shell/T";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { createClient } from "@/lib/supabase/server";

export const metadata = { title: "Acesso negado — Admin Plataforma" };

export default async function AdminForbiddenPage() {
  // Página fora de `(protected)/layout.tsx` (evita loop de redirect com
  // `requirePlatformAdmin`) — por isso não tem `IdiomaProvider` herdado.
  // Quem chega aqui já está autenticado (falhou só o check de platform admin),
  // então dá pra ler o idioma direto sem repetir o guard.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const locale = (user?.user_metadata?.locale as string | undefined) ?? null;

  return (
    <IdiomaProvider locale={locale}>
      <main className="flex min-h-screen items-center justify-center p-8">
        <Card className="w-full max-w-lg p-8 text-center">
          <h1 className="text-2xl font-semibold">
            <T>Acesso negado</T>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            <T>
              Esta área é restrita a administradores da plataforma com MFA ativo.
              Se você acredita que isso é um erro, contate o time de operações.
            </T>
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Button asChild variant="outline">
              <Link href="/">
                <T>Início</T>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/app">
                <T>Voltar para /app</T>
              </Link>
            </Button>
          </div>
        </Card>
      </main>
    </IdiomaProvider>
  );
}
