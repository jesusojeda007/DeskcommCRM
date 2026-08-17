import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { T } from "@/components/shell/T";

export const metadata = { title: "Nova senha" };

export default function ResetPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight"><T>Definir nova senha</T></h1>
        <p className="text-sm text-muted-foreground">
          <T>Escolha uma nova senha para sua conta</T>
        </p>
      </div>
      <ResetPasswordForm />
    </div>
  );
}
