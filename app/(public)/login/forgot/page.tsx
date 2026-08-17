import Link from "next/link";

import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { T } from "@/components/shell/T";

export const metadata = { title: "Recuperar senha" };

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight"><T>Recuperar senha</T></h1>
        <p className="text-sm text-muted-foreground">
          <T>Informe seu e-mail e enviaremos um link de redefinição</T>
        </p>
      </div>
      <ForgotPasswordForm />
      <p className="text-center text-sm text-muted-foreground">
        <T>Lembrou a senha?</T>{" "}
        <Link href="/login" className="font-medium text-foreground underline underline-offset-4">
          <T>Entrar</T>
        </Link>
      </p>
    </div>
  );
}
