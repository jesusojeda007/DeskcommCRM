import Link from "next/link";

import { LoginForm } from "@/components/auth/LoginForm";
import { branding } from "@/lib/branding";
import { T } from "@/components/shell/T";

export const metadata = { title: "Entrar" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; reset?: string; error?: string }>;
}) {
  const { next, reset, error } = await searchParams;
  return (
    <div className="space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight"><T>Entrar</T></h1>
        <p className="text-sm text-muted-foreground">{branding().name}</p>
      </div>
      {reset === "success" && (
        <div
          className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm"
          role="status"
        >
          <T>Senha redefinida com sucesso. Entre com a nova senha.</T>
        </div>
      )}
      {error === "link_invalido" && (
        <div
          className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
          <T>
            Link inválido ou expirado. Peça um novo em Recuperar senha ou refaça o
            cadastro.
          </T>
        </div>
      )}
      {error === "provisionamento" && (
        <div
          className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
          <T>
            Sua conta foi confirmada, mas houve um erro ao preparar seu ambiente.
            Tente entrar novamente em instantes.
          </T>
        </div>
      )}
      <LoginForm next={next} />
      <div className="space-y-2 text-center text-sm">
        <p>
          <Link
            href="/login/forgot"
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            <T>Esqueci minha senha</T>
          </Link>
        </p>
        <p className="text-muted-foreground">
          <T>Não tem conta?</T>{" "}
          <Link
            href="/signup"
            className="font-medium text-foreground underline underline-offset-4"
          >
            <T>Criar conta</T>
          </Link>
        </p>
      </div>
    </div>
  );
}
