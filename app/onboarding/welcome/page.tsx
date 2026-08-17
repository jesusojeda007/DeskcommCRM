import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import { WelcomeForm } from "./_form";
import { branding } from "@/lib/branding";
import { T } from "@/components/shell/T";

export const dynamic = "force-dynamic";

export default async function WelcomePage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);
  if (!activeOrg) redirect("/login");

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">
          <T>Boas-vindas ao</T> {branding().name}
        </h2>
        <p className="text-sm text-muted-foreground">
          <T>Vamos configurar sua operação em alguns passos rápidos.</T>
        </p>
      </header>
      <WelcomeForm defaultOrgName={activeOrg.name} />
    </div>
  );
}
