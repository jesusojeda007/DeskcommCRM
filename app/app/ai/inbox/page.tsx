import { redirect } from "next/navigation";

import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { ROLE_RANK } from "@/lib/auth/types";
import { PageHeader } from "@/components/shell/PageHeader";
import { AgentInboxList } from "./_components/AgentInboxList";

export const dynamic = "force-dynamic";

export default async function AgentInboxPage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);
  if (!activeOrg) redirect("/app");
  const canResolve = ROLE_RANK[activeOrg.role] >= ROLE_RANK.agent;

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <PageHeader
        title="Central de avisos"
        subtitle="O que o assistente precisou escalar para o time: conexões caídas, tarefas que falharam, atendimentos passados a humanos."
      />
      <AgentInboxList canResolve={canResolve} />
    </div>
  );
}
