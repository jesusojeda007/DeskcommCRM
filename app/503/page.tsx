import Link from "next/link";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { normalizarIdiomaDoAceite } from "@/lib/i18n/idiomas";
import { T } from "@/components/shell/T";

export default async function ServiceUnavailablePage() {
  const aceite = (await headers()).get("accept-language");
  return (
    <IdiomaProvider locale={normalizarIdiomaDoAceite(aceite)}>
      <main className="flex min-h-screen items-center justify-center p-8">
        <Card className="w-full max-w-md p-8 text-center">
          <h1 className="text-2xl font-semibold">
            <T>503 — Em manutenção</T>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            <T>Voltamos em alguns minutos.</T>
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Button asChild>
              <Link href="/">
                <T>Voltar</T>
              </Link>
            </Button>
          </div>
        </Card>
      </main>
    </IdiomaProvider>
  );
}
