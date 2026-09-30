import type { Metadata } from "next";
import { Breadcrumbs, CTA, IntegratedCard, JsonLd, ServiceCard } from "@/components/ui";
import { services } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Serviços Terceirizados em SP: Portaria, Limpeza, Recepção, Ronda e Manutenção",
  description:
    "Conheça os serviços terceirizados da LM Facilities no estado de São Paulo: controlador de acesso, portaria, auxiliar de limpeza, recepcionista, ronda e manutenção predial.",
  alternates: { canonical: "/servicos" },
};

export default function Servicos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Serviços" }]} />
          <p className="eyebrow eyebrow--light">Nossos serviços</p>
          <h1>Serviços terceirizados para empresas no estado de São Paulo</h1>
          <p className="page-hero__lead">Soluções completas em terceirização de serviços para atender todas as necessidades da sua empresa.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="svc-grid">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}
            <IntegratedCard /></div>
        </div>
      </section>
      <CTA />
      <JsonLd data={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Serviços", path: "/servicos" }])} />
    </>
  );
}
