import Link from "next/link";

import { SignupForm } from "@/components/auth/SignupForm";
import { branding } from "@/lib/branding";
import { T } from "@/components/shell/T";

export const metadata = { title: "Criar conta" };

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight"><T>Criar conta</T></h1>
        <p className="text-sm text-muted-foreground">
          <T>Comece a usar o</T> {branding().name} <T>em minutos</T>
        </p>
      </div>
      <SignupForm />
      <p className="text-center text-sm text-muted-foreground">
        <T>Já tem conta?</T>{" "}
        <Link href="/login" className="font-medium text-foreground underline underline-offset-4">
          <T>Entrar</T>
        </Link>
      </p>
    </div>
  );
}
