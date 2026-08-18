"use client";

import { Badge } from "@/components/ui/badge";
import { useT } from "@/hooks/i18n/useT";

// ---------------------------------------------------------------------------
// Status badge helpers (same palette as TenantsTable)
// ---------------------------------------------------------------------------

const STATUS_VARIANTS: Record<
  string,
  "success" | "info" | "warning" | "error" | "neutral"
> = {
  active: "success",
  onboarding: "info",
  suspended: "warning",
  redacted: "error",
};

const STATUS_LABELS: Record<string, string> = {
  active: "Ativo",
  onboarding: "Onboarding",
  suspended: "Suspenso",
  redacted: "Redigido",
};

interface TenantStatusBadgeProps {
  status: string;
}

/**
 * Extraído do layout (Server Component) porque a tradução do rótulo de
 * status precisa de `useT()` — hook, só disponível do lado cliente.
 */
export function TenantStatusBadge({ status }: TenantStatusBadgeProps) {
  const t = useT();
  return (
    <Badge variant={STATUS_VARIANTS[status] ?? "neutral"}>
      {t(STATUS_LABELS[status] ?? status)}
    </Badge>
  );
}
