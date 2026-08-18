import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { normalizarIdiomaDoAceite } from "@/lib/i18n/idiomas";
import { T } from "@/components/shell/T";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Conta suspensa",
};

export default async function AccountSuspendedPage() {
  // Chega aqui só depois de `loadAuthUser()` resolver (redirect de
  // `app/app/layout.tsx`), mas lê de novo sem redirecionar — ausência de
  // sessão aqui não é erro, é só um acesso direto à URL.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const locale =
    (user?.user_metadata?.locale as string | undefined) ??
    normalizarIdiomaDoAceite((await headers()).get("accept-language"));

  return (
    <IdiomaProvider locale={locale}>
      <main className="flex min-h-screen items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 text-center space-y-4">
          <h1 className="text-2xl font-semibold">
            <T>Conta suspensa</T>
          </h1>
          <p className="text-sm text-muted-foreground">
            <T>Sua conta está suspensa. Entre em contato com</T>{" "}
            <a
              href="mailto:support@deskcomm.com.br"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              support@deskcomm.com.br
            </a>{" "}
            <T>para mais informações.</T>
          </p>
          <div className="pt-2">
            <Button asChild variant="outline">
              <Link href="/login">
                <T>Sair</T>
              </Link>
            </Button>
          </div>
        </Card>
      </main>
    </IdiomaProvider>
  );
}
