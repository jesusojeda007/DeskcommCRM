import { ConnectNuvemshopClient } from "./_client";
import { T } from "@/components/shell/T";

export const dynamic = "force-dynamic";

export default function ConnectNuvemshopPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold tracking-tight">
          <T>Conectar Nuvemshop</T>
        </h2>
        <p className="text-sm text-muted-foreground">
          <T>Importe pedidos, clientes e produtos da sua loja Nuvemshop.</T>
        </p>
      </header>
      <ConnectNuvemshopClient />
    </div>
  );
}
