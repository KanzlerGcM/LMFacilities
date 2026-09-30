import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs, CTA, JsonLd } from "@/components/ui";
import { benefits, differentials } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Quem Somos: Empresa de Terceirização de Serviços em SP",
  description:
    "A LM Facilities é especializada em terceirização de serviços no estado de São Paulo, com foco em eficiência operacional, redução de custos e alto padrão de qualidade.",
  alternates: { canonical: "/sobre" },
};

const values = [
  { t: "Missão", d: "Oferecer soluções integradas que simplificam a gestão do cliente, garantindo mais controle, produtividade e segurança no dia a dia." },
  { t: "Valores", d: "Ética, transparência e comprometimento em cada contrato e em cada posto de trabalho." },
  { t: "Compromisso", d: "Construir parcerias sólidas e duradouras, sempre com foco em resultado e excelência na prestação dos serviços." },
];

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Início", href: "/" }, { name: "Quem somos" }]} />
          <p className="eyebrow eyebrow--light">Quem somos</p>
          <h1>LM Facilities: terceirização de serviços com eficiência e qualidade</h1>
          <p className="page-hero__lead">Atendimento customizado, com eficiência, respeito e foco total nas necessidades operacionais dos clientes.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <Image src="/images/equipe.webp" alt="Equipe da LM Facilities" width={729} height={900} sizes="(max-width: 900px) 100vw, 45vw" priority />
          </div>
          <div className="split__text">
            <h2>Especializada em terceirização de serviços</h2>
            <p>Somos especializados na terceirização de serviços, com foco em entregar <strong>eficiência operacional, redução de custos e alto padrão de qualidade</strong>.</p>
            <p>Cuidamos de portaria, controle de acesso, limpeza, recepção, ronda e manutenção predial para que a sua empresa possa se concentrar no que realmente importa: o seu negócio.</p>
            <div className="values">
              {values.map((v) => (
                <div key={v.t}><h3>{v.t}</h3><p>{v.d}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <header className="section__head section__head--light"><h2>Nossos diferenciais</h2></header>
          <ol className="steps">
            {differentials.map((d, i) => (
              <li key={d.title}><span className="steps__n">{String(i + 1).padStart(2, "0")}</span><h3>{d.title}</h3><p>{d.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__head"><h2>Benefícios para o cliente</h2></header>
          <div className="tiles">
            {benefits.map((b, i) => (
              <article key={b.title} className={`tile tile--${i}`}><h3>{b.title}</h3><p>{b.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <JsonLd data={breadcrumbSchema([{ name: "Início", path: "/" }, { name: "Quem somos", path: "/sobre" }])} />
    </>
  );
}
