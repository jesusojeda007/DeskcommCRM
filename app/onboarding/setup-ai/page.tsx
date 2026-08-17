import { SetupAiForm } from "./_form";
import { T } from "@/components/shell/T";

export const dynamic = "force-dynamic";

export default function SetupAiPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">
          <T>Configurar IA</T>
        </h2>
        <p className="text-sm text-muted-foreground">
          <T>Escolha um perfil para o seu primeiro Atendente IA. Você pode ajustar tudo depois.</T>
        </p>
      </header>
      <SetupAiForm />
    </div>
  );
}
