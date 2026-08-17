import { headers } from "next/headers";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { normalizarIdiomaDoAceite } from "@/lib/i18n/idiomas";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  // Ninguém logou ainda — sem `user_metadata.locale` pra ler, a pista que
  // sobra é o que o browser já manda sozinho. Ver `normalizarIdiomaDoAceite`.
  const aceite = (await headers()).get("accept-language");
  return (
    <IdiomaProvider locale={normalizarIdiomaDoAceite(aceite)}>
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </IdiomaProvider>
  );
}
