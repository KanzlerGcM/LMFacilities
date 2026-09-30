import Link from "next/link";
import { ArrowIcon, WhatsAppIcon, serviceIcon } from "./Icons";
import { site, whatsappLink, type Service } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a href={whatsappLink()} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Falar com a LM Facilities pelo WhatsApp">
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}

export function CTA({ title = "Estamos prontos para otimizar a operação da sua empresa." }: { title?: string }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>{title}</h2>
          <p>Agende uma reunião e descubra nossas soluções sob medida, ou solicite um orçamento sem compromisso.</p>
        </div>
        <div className="cta__actions">
          <a href={whatsappLink()} className="btn btn--primary" target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> WhatsApp {site.phoneDisplay}</a>
          <Link href="/contato" className="btn btn--ghost">Formulário de orçamento</Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  const Icon = serviceIcon[s.icon];
  return (
    <Link href={`/servicos/${s.slug}`} className="svc-card">
      <span className="svc-card__icon"><Icon width={28} height={28} /></span>
      <h3>{s.name}</h3>
      <p>{s.short}</p>
      <span className="svc-card__more">Saiba mais <ArrowIcon width={16} height={16} /></span>
    </Link>
  );
}

export function IntegratedCard() {
  return (
    <Link href="/contato" className="svc-card svc-card--dark">
      <span className="svc-card__icon"><ArrowIcon width={28} height={28} /></span>
      <h3>Solução integrada de facilities</h3>
      <p>Soluções completas em terceirização de serviços para atender todas as necessidades da sua empresa, com um só contrato.</p>
      <span className="svc-card__more">Montar meu orçamento <ArrowIcon width={16} height={16} /></span>
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={i}>{it.href ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
