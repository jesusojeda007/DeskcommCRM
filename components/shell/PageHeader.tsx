"use client";

import { useT } from "@/hooks/i18n/useT";

/**
 * Cabeçalho de página que traduz — para quando o `h1`/subtítulo nasce em
 * Server Component e `useT()` (hook, cliente) não pode ser chamado ali.
 *
 * O texto continua literal em português no `page.tsx` que chama isto; é
 * este componente, já do lado cliente, que resolve `t()` por baixo.
 */
export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const t = useT();
  return (
    <header>
      <h1 className="text-2xl font-semibold tracking-tight">{t(title)}</h1>
      {subtitle && <p className="text-sm text-muted-foreground">{t(subtitle)}</p>}
    </header>
  );
}
