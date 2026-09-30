import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { services, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Image src="/images/logo.webp" alt="Logo LM Facilities LTDA" width={110} height={125} className="footer__logo" />
          <p className="footer__about">{site.slogan}</p>
        </div>
        <div>
          <h2 className="footer__title">Serviços</h2>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/servicos/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Empresa</h2>
          <ul className="footer__list">
            <li><Link href="/sobre">Quem somos</Link></li>
            <li><Link href="/servicos">Todos os serviços</Link></li>
            <li><Link href="/contato">Solicitar orçamento</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Contato</h2>
          <ul className="footer__list footer__contact">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> WhatsApp {site.phoneDisplay}</a></li>
            <li><a href={`tel:${site.phoneE164}`}><PhoneIcon width={18} height={18} /> {site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`}><MailIcon width={18} height={18} /> {site.email}</a></li>
            <li><span><PinIcon width={18} height={18} /> Atendemos todo o estado de São Paulo</span></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          © {year} {site.legalName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
