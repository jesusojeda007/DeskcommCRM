import { redirect } from "next/navigation";
import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { ROLE_RANK } from "@/lib/auth/types";
import { PageHeader } from "@/components/shell/PageHeader";
import { WebhooksClient } from "./_components/WebhooksClient";

export const dynamic = "force-dynamic";

export default async function WebhooksPage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);
  const canManage = !!activeOrg && ROLE_RANK[activeOrg.role] >= ROLE_RANK.manager;
  if (!canManage) redirect("/app/inbox");

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <PageHeader
        title="Webhooks"
        subtitle="Receba contatos de fora (landing pages, formulários) e crie automações que agem sozinhas."
      />
      <WebhooksClient />
    </div>
  );
}
