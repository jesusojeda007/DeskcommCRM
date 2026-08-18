import type { ReactNode } from "react";
import { requirePlatformAdmin } from "@/lib/auth/requirePlatformAdmin";
import { AdminShell } from "@/components/admin/AdminShell";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";

export default async function ProtectedAdminLayout({ children }: { children: ReactNode }) {
  const { user } = await requirePlatformAdmin();
  const locale = (user.user_metadata?.locale as string | undefined) ?? null;
  return (
    <IdiomaProvider locale={locale}>
      <AdminShell userEmail={user.email ?? ""}>{children}</AdminShell>
    </IdiomaProvider>
  );
}
