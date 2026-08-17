"use client";

import { startTransition } from "react";
import { Button } from "@/components/ui/button";
import { finishOnboarding } from "@/app/actions/onboarding/finishOnboarding";
import { useT } from "@/hooks/i18n/useT";

export function SkipToEnd() {
  const t = useT();
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="text-xs text-muted-foreground"
      onClick={() => {
        startTransition(() => {
          void finishOnboarding();
        });
      }}
    >
      {t("Pular tudo (DEV)")}
    </Button>
  );
}
