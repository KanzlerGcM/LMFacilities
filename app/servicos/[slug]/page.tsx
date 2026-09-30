import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CTA, JsonLd, ServiceCard } from "@/components/ui";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { services, site, whatsappLink } from "@/lib/site";
import { breadcrumbSchema, orgId } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/servicos/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | LM Facilities`, description: s.metaDescription, url: `/servicos/${s.slug}`, images: [{ url: s.image, alt: s.imageAlt }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Serviços", href: "/servicos" }, { name: s.name }]} />
          <p className="eyebrow eyebrow--light">{s.name}</p>
          <h1>{s.h1}</h1>
          <p className="page-hero__lead">{s.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Image src={s.image} alt={s.imageAlt} width={800} height={900} sizes="(max-width: 900px) 100vw, 45vw" priority />
          </div>
          <div className="split__text">
            <h2>Como funciona o serviço</h2>
            {s.intro.map((p) => <p key={p}>{p}</p>)}
            <ul className="checks">
              {s.bullets.map((b) => <li key={b}><CheckIcon width={20} height={20} /> {b}</li>)}
            </ul>
            <p className="highlight">{s.closing}</p>
            <a href={whatsappLink(`Olá! Gostaria de um orçamento para ${s.name}.`)} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={18} height={18} /> Orçamento de {s.name.toLowerCase()}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="ideal">
            <div>
              <h2>Indicado para</h2>
              <ul className="chips">{s.idealFor.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div>
              <h2>Onde atendemos</h2>
              <p>Atendemos empresas e condomínios em todo o <strong>estado de São Paulo</strong>:</p>
              <ul className="chips">{site.regions.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__head">
            <h2>Outros serviços terceirizados</h2>
            <p>Combine serviços e simplifique a gestão da sua operação. <Link href="/servicos">Ver todos</Link></p>
          </header>
          <div className="svc-grid svc-grid--4">{others.map((o) => <ServiceCard key={o.slug} s={o} />)}</div>
        </div>
      </section>

      <CTA title={`Precisa de ${s.name.toLowerCase()} para a sua empresa?`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          serviceType: s.keywords[0],
          description: s.metaDescription,
          url: `${site.url}/servicos/${s.slug}`,
          provider: { "@id": orgId },
          areaServed: { "@type": "State", name: "São Paulo" },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Serviços", path: "/servicos" }, { name: s.name, path: `/servicos/${s.slug}` }])} />
    </>
  );
}
