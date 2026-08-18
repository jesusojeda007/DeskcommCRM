import { redirect } from "next/navigation";

import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { ROLE_RANK } from "@/lib/auth/types";
import { PageHeader } from "@/components/shell/PageHeader";
import { AuditClient } from "./_client";

export const dynamic = "force-dynamic";

export default async function AuditPage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);
  if (!activeOrg) redirect("/app");
  if (!user.is_platform_admin && ROLE_RANK[activeOrg.role] < ROLE_RANK.manager) {
    redirect("/403");
  }

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <PageHeader
        title="Audit Log"
        subtitle="Histórico append-only de mutações na organização. Manager+."
      />
      <AuditClient />
    </div>
  );
}
