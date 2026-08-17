"use client";

import { useT } from "@/hooks/i18n/useT";

/**
 * Traduz um literal isolado que nasce em Server Component — o caso comum
 * (título/subtítulo de página) tem `PageHeader`; este é para o resto: uma
 * frase solta no meio de um `return` que `useT()` (hook, cliente) não pode
 * resolver sozinho.
 */
export function T({ children }: { children: string }) {
  const t = useT();
  return <>{t(children)}</>;
}
