import Link from "next/link";

import { requireAuth, resolveActiveOrg } from "@/lib/auth/server";
import { ROLE_RANK } from "@/lib/auth/types";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/shell/PageHeader";
import { T } from "@/components/shell/T";
import { TeamMembersClient } from "./_components/TeamMembersClient";
import { AttendantsClient } from "./_components/AttendantsClient";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const user = await requireAuth();
  const activeOrg = await resolveActiveOrg(user);
  const isAdmin = !!activeOrg && ROLE_RANK[activeOrg.role] >= ROLE_RANK.admin;
  const isManager = !!activeOrg && ROLE_RANK[activeOrg.role] >= ROLE_RANK.manager;

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <PageHeader title="Equipe" subtitle="Gestão de membros, roles e atendimento do tenant." />
        {isAdmin ? (
          <Button asChild>
            <Link href="/app/team/invite">
              <T>Convidar membros</T>
            </Link>
          </Button>
        ) : null}
      </div>

      <Tabs defaultValue="members" className="flex flex-1 flex-col">
        <TabsList>
          <TabsTrigger value="members">
            <T>Membros</T>
          </TabsTrigger>
          <TabsTrigger value="attendants">
            <T>Atendimento</T>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="mt-4">
          <TeamMembersClient currentUserId={user.id} canManage={isAdmin} />
        </TabsContent>
        <TabsContent value="attendants" className="mt-4">
          {isManager ? (
            <AttendantsClient canManage={isManager} />
          ) : (
            <p className="text-sm text-muted-foreground">
              <T>A gestão de atendimento está disponível para gerentes e administradores.</T>
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
