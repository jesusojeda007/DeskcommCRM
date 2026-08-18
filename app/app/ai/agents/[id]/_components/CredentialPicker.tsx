"use client";
import * as React from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  type CredentialRow,
  type Provider,
  credentialStatus,
} from "@/hooks/ai/useCredentials";
import { useT } from "@/hooks/i18n/useT";

interface Props {
  provider: Provider;
  credentials: CredentialRow[];
  value: string;
  onChange: (id: string) => void;
  disabled?: boolean;
  id?: string;
}

export function CredentialPicker({ provider, credentials, value, onChange, disabled, id }: Props) {
  const t = useT();
  const STATUS_LABEL: Record<ReturnType<typeof credentialStatus>, string> = {
    validated: t("validada"),
    validating: t("validando"),
    invalid: t("inválida"),
    inactive: t("inativa"),
  };
  const filtered = credentials.filter((c) => c.provider === provider);

  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{t("Chave de acesso")}</Label>
      <Select value={value || undefined} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger id={id}>
          <SelectValue placeholder={t("Escolha uma chave")} />
        </SelectTrigger>
        <SelectContent>
          {filtered.map((c) => {
            const st = credentialStatus(c);
            return (
              <SelectItem key={c.id} value={c.id}>
                {c.label} · …{c.api_key_last4 ?? "????"} · {STATUS_LABEL[st]}
              </SelectItem>
            );
          })}
          {filtered.length === 0 ? (
            <SelectItem value="__none__" disabled>
              {t("Nenhuma credencial {provider} cadastrada", { provider })}
            </SelectItem>
          ) : null}
        </SelectContent>
      </Select>
      {filtered.length === 0 ? (
        <p className="text-xs text-muted-foreground">
          <Link
            href="/app/ai/credentials"
            className="font-medium text-foreground underline underline-offset-4"
          >
            {t("Cadastrar credencial {provider}", { provider })}
          </Link>{" "}
          {t("na aba Credenciais.")}
        </p>
      ) : null}
    </div>
  );
}

export function findCredential(credentials: CredentialRow[], id: string): CredentialRow | null {
  return credentials.find((c) => c.id === id) ?? null;
}
