"use client";
import Link from "next/link";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useT } from "@/hooks/i18n/useT";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { Contact } from "@/lib/types/contacts";
import { rotuloDoContato } from "@/lib/contacts/rotulo-do-contato";

interface Props {
  contacts: Contact[];
}

function displayName(c: Contact): string {
  // Era a outra tela sem telefone no fallback — e a única com "—" numa lista
  // onde a coluna ao lado já mostra o número.
  return rotuloDoContato(c);
}

export function ContactsTable({ contacts }: Props) {
  const t = useT();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("Nome")}</TableHead>
          <TableHead>{t("Email")}</TableHead>
          <TableHead>{t("Telefone")}</TableHead>
          <TableHead>{t("Tags")}</TableHead>
          <TableHead>{t("Última atividade")}</TableHead>
          <TableHead>{t("Status")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((c) => (
          <TableRow key={c.id} className="cursor-pointer">
            <TableCell className="font-medium">
              <Link href={`/app/contacts/${c.id}`} className="hover:underline">
                {displayName(c)}
              </Link>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {c.email ?? "—"}
            </TableCell>
            <TableCell className="text-muted-foreground">
              {c.phone_number ?? "—"}
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {c.tags.length === 0
                  ? <span className="text-muted-foreground text-xs">—</span>
                  : c.tags.map((tg) => (
                      <Badge key={tg} variant="neutral">{tg}</Badge>
                    ))}
              </div>
            </TableCell>
            <TableCell className="text-muted-foreground text-sm">
              {c.last_activity_at
                ? formatRelative(new Date(c.last_activity_at), new Date(), { locale: ptBR })
                : "—"}
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {c.is_anonymized && <Badge variant="destructive">{t("Anonimizado")}</Badge>}
                {c.is_blocked && <Badge variant="warning">{t("Bloqueado")}</Badge>}
                {!c.is_anonymized && !c.is_blocked && (
                  <Badge variant="success">{t("Ativo")}</Badge>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
