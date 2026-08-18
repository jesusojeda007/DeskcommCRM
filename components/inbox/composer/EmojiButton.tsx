"use client";
import { lazy, Suspense, useState } from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { Smiley } from "@/lib/ui/icons";
import { useT } from "@/hooks/i18n/useT";
import { useIdioma } from "@/lib/i18n/IdiomaProvider";

// Lazy: o picker (+dados) só carrega quando o usuário abre — zero peso no bundle do inbox.
const Picker = lazy(() => import("@emoji-mart/react"));

interface Props {
  disabled?: boolean;
  onPick: (emoji: string) => void;
}

export function EmojiButton({ disabled, onPick }: Props) {
  const t = useT();
  const idioma = useIdioma();
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="h-9 w-9 shrink-0"
          aria-label={t("Emoji")}
          disabled={disabled}
        >
          <Smiley size={18} weight="regular" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" side="top" className="w-auto border-none p-0 shadow-lg">
        {open && (
          <Suspense fallback={<Skeleton className="h-[420px] w-[352px]" />}>
            <EmojiPickerLazy onPick={onPick} locale={idioma === "es" ? "es" : "pt"} />
          </Suspense>
        )}
      </PopoverContent>
    </Popover>
  );
}

function EmojiPickerLazy({ onPick, locale }: { onPick: (emoji: string) => void; locale: "pt" | "es" }) {
  return (
    <Picker
      data={async () => (await import("@emoji-mart/data")).default}
      locale={locale}
      previewPosition="none"
      onEmojiSelect={(e: { native: string }) => onPick(e.native)}
    />
  );
}
