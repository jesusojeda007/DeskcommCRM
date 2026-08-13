import { createHmac } from "node:crypto";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { signInviteToken, verifyInviteToken, INVITE_TTL_SECONDS } from "./invite-token";

const base = () => ({
  invite_id: "11111111-1111-1111-1111-111111111111",
  email: "alice@example.com",
  organization_id: "22222222-2222-2222-2222-222222222222",
  role: "agent",
  exp: Math.floor(Date.now() / 1000) + INVITE_TTL_SECONDS,
});

const ORIGINAIS = {
  INVITE_TOKEN_SECRET: process.env.INVITE_TOKEN_SECRET,
  INTERNAL_SECRET: process.env.INTERNAL_SECRET,
};

/** Restaura o ambiente: env é global, e teste que suja env contamina vizinho. */
afterEach(() => {
  for (const [chave, valor] of Object.entries(ORIGINAIS)) {
    if (valor === undefined) delete process.env[chave];
    else process.env[chave] = valor;
  }
});

/** Assina como um atacante faria, com um secret que ele escolhe. */
function forjaToken(secret: string, payload: ReturnType<typeof base>): string {
  const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const sig = createHmac("sha256", secret).update(body).digest().toString("base64url");
  return `${body}.${sig}`;
}

describe("invite-token", () => {
  beforeEach(() => {
    process.env.INVITE_TOKEN_SECRET = "secret-de-teste-nao-adivinhavel";
    delete process.env.INTERNAL_SECRET;
  });

  it("sign+verify roundtrip recovers payload", () => {
    const payload = base();
    const token = signInviteToken(payload);
    const out = verifyInviteToken(token);
    expect(out).toEqual(payload);
  });

  it("returns null for expired token", () => {
    const expired = { ...base(), exp: Math.floor(Date.now() / 1000) - 10 };
    const token = signInviteToken(expired);
    expect(verifyInviteToken(token)).toBeNull();
  });

  it("returns null for tampered signature", () => {
    const token = signInviteToken(base());
    const parts = token.split(".");
    const body = parts[0]!;
    const sig = parts[1]!;
    const flipped = sig.slice(0, -1) + (sig.endsWith("A") ? "B" : "A");
    expect(verifyInviteToken(`${body}.${flipped}`)).toBeNull();
  });

  it("returns null for tampered body", () => {
    const token = signInviteToken(base());
    const parts = token.split(".");
    const body = parts[0]!;
    const sig = parts[1]!;
    const flipped = body.slice(0, -1) + (body.endsWith("A") ? "B" : "A");
    expect(verifyInviteToken(`${flipped}.${sig}`)).toBeNull();
  });

  it("returns null for malformed token (no dot)", () => {
    expect(verifyInviteToken("notatoken")).toBeNull();
  });

  it("usa INTERNAL_SECRET quando INVITE_TOKEN_SECRET não existe", () => {
    delete process.env.INVITE_TOKEN_SECRET;
    process.env.INTERNAL_SECRET = "internal-de-teste";
    const payload = base();
    expect(verifyInviteToken(signInviteToken(payload))).toEqual(payload);
  });
});

/**
 * Sem secret configurado, a versão anterior caía no literal `"dev-fallback"` —
 * público no repo open-source. Quem lesse o código forjava um convite com
 * `organization_id` e `role` à escolha: admin em qualquer org. Ver
 * docs/threat-model.md §T4 e docs/testing/user-journey-map.md M4.
 *
 * O secret NÃO tem default. Falha alto, sempre.
 */
describe("invite-token · resolução do secret", () => {
  beforeEach(() => {
    delete process.env.INVITE_TOKEN_SECRET;
    delete process.env.INTERNAL_SECRET;
  });

  it("não emite token quando nenhum secret está configurado", () => {
    expect(() => signInviteToken(base())).toThrow(/INVITE_TOKEN_SECRET/);
  });

  it("não aceita token forjado com o literal 'dev-fallback'", () => {
    const forjado = forjaToken("dev-fallback", base());
    expect(() => verifyInviteToken(forjado)).toThrow(/INVITE_TOKEN_SECRET/);
  });

  it("trata secret vazio como ausente (é o estado de dev em lib/env.ts)", () => {
    process.env.INTERNAL_SECRET = "";
    const forjado = forjaToken("", base());
    expect(() => verifyInviteToken(forjado)).toThrow(/INVITE_TOKEN_SECRET/);
  });

  it("trata secret só de espaços como ausente", () => {
    process.env.INVITE_TOKEN_SECRET = "   ";
    expect(() => signInviteToken(base())).toThrow(/INVITE_TOKEN_SECRET/);
  });
});
