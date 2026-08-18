/**
 * /team/accept-invite/[token] — public route (added to PUBLIC_PATHS).
 *
 * Behavior matrix:
 *  - Invalid/expired token         → render error
 *  - Unauthenticated user          → render CTA → /login?next=...
 *  - Authenticated, email mismatch → render mismatch + sign-out CTA
 *  - Authenticated, email match    → form posts to Server Action which inserts
 *                                    membership and redirects to /app/inbox
 */
import Link from "next/link";
import { headers } from "next/headers";

import { verifyInviteToken } from "@/lib/auth/invite-token";
import { authRateLimited, AUTH_LIMITS } from "@/lib/auth/rate-limit";
import { createClient } from "@/lib/supabase/server";
import { acceptInviteAction } from "@/app/actions/team/acceptInvite";
import { IdiomaProvider } from "@/lib/i18n/IdiomaProvider";
import { T } from "@/components/shell/T";
import { normalizarIdiomaDoAceite } from "@/lib/i18n/idiomas";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ token: string }>;
}

export default async function AcceptInvitePage({ params }: PageProps) {
  const { token } = await params;
  // Fluxo público — pode chegar sem sessão (CTA de login) ou já logado
  // (aceite/mismatch). O locale segue quem estiver disponível: usuário
  // primeiro, `Accept-Language` como pista de quem ainda não logou.
  const acceite = (await headers()).get("accept-language");

  // O gargalo de enumeração é AQUI, não no aceite: a rota é pública e cada
  // GET testa um token. Sem teto, varrer o espaço de tokens sai de graça
  // (issue #64). Barrar antes de verificar mantém a resposta indistinguível
  // entre token válido e inválido para quem está varrendo.
  const localeDoAceite = normalizarIdiomaDoAceite(acceite);

  if (await authRateLimited("invite_accept", null, AUTH_LIMITS.invite_accept)) {
    return (
      <Shell locale={localeDoAceite}>
        <h1 className="text-xl font-semibold">
          <T>Muitas tentativas</T>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <T>Aguarde alguns minutos e abra o link do convite de novo.</T>
        </p>
      </Shell>
    );
  }

  const payload = verifyInviteToken(token);

  if (!payload) {
    return (
      <Shell locale={localeDoAceite}>
        <h1 className="text-xl font-semibold">
          <T>Convite inválido ou expirado</T>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <T>Este link não é válido ou já passou da janela de 24h. Peça um novo convite ao admin do tenant.</T>
        </p>
      </Shell>
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const next = encodeURIComponent(`/team/accept-invite/${token}`);
    return (
      <Shell locale={localeDoAceite}>
        <h1 className="text-xl font-semibold">
          <T>Você foi convidado</T>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <T>Para aceitar o convite como</T> <strong>{payload.role}</strong>, <T>faça login com o email</T>{" "}
          <strong>{payload.email}</strong>.
        </p>
        <Link
          href={`/login?next=${next}`}
          className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          <T>Fazer login</T>
        </Link>
      </Shell>
    );
  }

  const localeDoUsuario = (user.user_metadata?.locale as string | undefined) ?? localeDoAceite;

  const userEmail = (user.email ?? "").trim().toLowerCase();
  if (userEmail !== payload.email.trim().toLowerCase()) {
    return (
      <Shell locale={localeDoUsuario}>
        <h1 className="text-xl font-semibold">
          <T>Email não corresponde</T>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <T>Você está logado como</T> <strong>{user.email}</strong>, <T>mas o convite foi enviado para</T>{" "}
          <strong>{payload.email}</strong>. <T>Saia e faça login com o email correto.</T>
        </p>
        <form action="/api/auth/signout" method="post" className="mt-4">
          <button
            type="submit"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            <T>Sair</T>
          </button>
        </form>
      </Shell>
    );
  }

  async function accept() {
    "use server";
    await acceptInviteAction(token);
  }

  return (
    <Shell locale={localeDoUsuario}>
      <h1 className="text-xl font-semibold">
        <T>Aceitar convite</T>
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        <T>Você foi convidado para entrar como</T> <strong>{payload.role}</strong>.{" "}
        <T>Confirme abaixo para ativar seu acesso.</T>
      </p>
      <form action={accept} className="mt-4">
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          <T>Aceitar convite</T>
        </button>
      </form>
    </Shell>
  );
}

function Shell({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <IdiomaProvider locale={locale}>
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-md rounded-lg border bg-card p-8 shadow-sm">{children}</div>
      </div>
    </IdiomaProvider>
  );
}
