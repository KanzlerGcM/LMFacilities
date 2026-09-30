"use client";

import { FormEvent, useState } from "react";
import { services, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

// Formulário sem servidor: monta a mensagem e abre o WhatsApp da empresa.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Olá! Gostaria de solicitar um orçamento.",
      `Nome: ${f.get("nome")}`,
      f.get("empresa") ? `Empresa: ${f.get("empresa")}` : "",
      `Cidade: ${f.get("cidade")}`,
      `Serviço: ${f.get("servico")}`,
      f.get("mensagem") ? `Mensagem: ${f.get("mensagem")}` : "",
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>Nome*<input name="nome" required autoComplete="name" placeholder="Seu nome" /></label>
        <label>Empresa<input name="empresa" autoComplete="organization" placeholder="Nome da empresa" /></label>
      </div>
      <div className="form__row">
        <label>Cidade*<input name="cidade" required autoComplete="address-level2" placeholder="Ex.: São Paulo" /></label>
        <label>Serviço*
          <select name="servico" required defaultValue="">
            <option value="" disabled>Selecione</option>
            {services.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>Mais de um serviço</option>
          </select>
        </label>
      </div>
      <label>Mensagem<textarea name="mensagem" rows={4} placeholder="Conte um pouco sobre a sua necessidade (local, horários, número de postos...)" /></label>
      <button type="submit" className="btn btn--primary btn--block"><WhatsAppIcon width={18} height={18} /> Enviar pelo WhatsApp</button>
      <p className="form__note" aria-live="polite">
        {sent ? "Abrimos o WhatsApp com a sua mensagem. É só tocar em enviar." : <>Prefere e-mail? Escreva para <a href={`mailto:${site.email}`}>{site.email}</a>.</>}
      </p>
    </form>
  );
}
