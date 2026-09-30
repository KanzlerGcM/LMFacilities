import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Breadcrumbs, JsonLd } from "@/components/ui";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contato e Orçamento de Terceirização de Serviços em SP",
  description:
    "Solicite um orçamento sem compromisso com a LM Facilities. WhatsApp (11) 93919-7949 ou contato.lm@uol.com.br. Atendemos todo o estado de São Paulo.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Contato" }]} />
          <p className="eyebrow eyebrow--light">Próximos passos</p>
          <h1>Solicite um orçamento sem compromisso</h1>
          <p className="page-hero__lead">Estamos prontos para otimizar a operação da sua empresa. Agende uma reunião e descubra nossas soluções sob medida.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <h2>Fale com a LM Facilities</h2>
            <ul className="contact__list">
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><span className="ci"><WhatsAppIcon /></span><span><small>WhatsApp</small>{site.phoneDisplay}</span></a></li>
              <li><a href={`tel:${site.phoneE164}`}><span className="ci"><PhoneIcon /></span><span><small>Telefone</small>{site.phoneDisplay}</span></a></li>
              <li><a href={`mailto:${site.email}`}><span className="ci"><MailIcon /></span><span><small>E-mail</small>{site.email}</span></a></li>
              <li><span className="contact__static"><span className="ci"><PinIcon /></span><span><small>Área de atendimento</small>Todo o estado de São Paulo</span></span></li>
            </ul>
            <div className="contact__img">
              <Image src="/images/contato.webp" alt="Aperto de mãos fechando parceria de terceirização" width={729} height={900} sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
          </div>
          <div className="card">
            <h2>Envie sua solicitação</h2>
            <p className="muted">Preencha os dados e a mensagem abre pronta no WhatsApp.</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Contato", path: "/contato" }])} />
    </>
  );
}
