import { redirect } from "next/navigation";

import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { ROLE_RANK } from "@/lib/auth/types";
import { PageHeader } from "@/components/shell/PageHeader";
import { RequestsTable } from "./RequestsTable";

export const dynamic = "force-dynamic";

export default async function LgpdRequestsPage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);

  if (!activeOrg) redirect("/app");

  // Permission: role >= admin OR platform_admin (lgpd:execute)
  const isAllowed =
    user.is_platform_admin || ROLE_RANK[activeOrg.role] >= ROLE_RANK.admin;
  if (!isAllowed) redirect("/app");

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <PageHeader
        title="Solicitações LGPD"
        subtitle="Anonimizações e solicitações de dados de titulares. Apenas admins."
      />
      <RequestsTable />
    </div>
  );
}
