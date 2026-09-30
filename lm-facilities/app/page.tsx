import Image from "next/image";
import Link from "next/link";
import { CTA, IntegratedCard, JsonLd, ServiceCard } from "@/components/ui";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { benefits, differentials, faqs, services, site, testimonial, whatsappLink } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="hero__bg" />
        <div className="container hero__inner">
          <p className="eyebrow eyebrow--light">Terceirização de serviços · Estado de São Paulo</p>
          <h1>Terceirização de serviços para empresas em SP, com eficiência e padrão de qualidade</h1>
          <p className="hero__lead">
            Portaria e controlador de acesso, limpeza, recepção, ronda e manutenção predial. {site.slogan}
          </p>
          <div className="hero__actions">
            <a href={whatsappLink()} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={20} height={20} /> Solicitar orçamento
            </a>
            <Link href="/servicos" className="btn btn--outline-light btn--lg">Conheça os serviços</Link>
          </div>
          <ul className="hero__points">
            <li><CheckIcon width={18} height={18} /> Orçamento sem compromisso</li>
            <li><CheckIcon width={18} height={18} /> Profissionais treinados</li>
            <li><CheckIcon width={18} height={18} /> Atendimento sob medida</li>
          </ul>
        </div>
      </section>

      <section className="section" id="servicos" aria-labelledby="t-servicos">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">Nossos serviços</p>
            <h2 id="t-servicos">Soluções completas em terceirização de serviços</h2>
            <p>Contrate um serviço ou combine vários em uma única gestão de facilities, com um só fornecedor e um só ponto de contato.</p>
          </header>
          <div className="svc-grid">
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
            <IntegratedCard />
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="t-sobre">
        <div className="container split">
          <div className="split__media">
            <Image src="/images/equipe.webp" alt="Equipe de profissionais da LM Facilities em edifício corporativo" width={729} height={900} sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="split__text">
            <p className="eyebrow">Quem somos</p>
            <h2 id="t-sobre">Especialistas em terceirização de serviços e facilities</h2>
            <p>
              A LM Facilities é especializada na terceirização de serviços, com foco em entregar <strong>eficiência operacional, redução de custos e alto padrão de qualidade</strong>.
            </p>
            <p>
              Nossa missão é oferecer soluções integradas que simplificam a gestão do cliente, garantindo mais controle, produtividade e segurança no dia a dia.
            </p>
            <p>
              Atuamos com base em <strong>ética, transparência e comprometimento</strong>, construindo parcerias sólidas e duradouras, sempre com foco em resultado e excelência na prestação dos serviços.
            </p>
            <Link href="/sobre" className="btn btn--dark">Conheça a LM Facilities</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="t-mercado">
        <div className="container split split--reverse">
          <div className="split__media">
            <Image src="/images/mercado.webp" alt="Gráfico de crescimento representando o mercado de facilities" width={1088} height={1344} sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div className="split__text">
            <p className="eyebrow">Oportunidade de mercado</p>
            <h2 id="t-mercado">Por que terceirizar com a LM Facilities?</h2>
            <p>
              A terceirização é uma das estratégias mais usadas pelas empresas brasileiras para aumentar a eficiência operacional e reduzir custos. O mercado de facilities cresce de forma consistente e representa uma oportunidade estratégica para organizações que buscam competitividade.
            </p>
            <p>A <strong>LM Facilities</strong> transforma essa estratégia em <strong>resultado real</strong> no seu dia a dia.</p>
            <p className="highlight">Mais competitividade, menos custo e operação profissional.</p>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="t-dif">
        <div className="container">
          <header className="section__head section__head--light">
            <p className="eyebrow eyebrow--light">Diferenciais da empresa</p>
            <h2 id="t-dif">O que faz a diferença na sua operação</h2>
          </header>
          <ol className="steps">
            {differentials.map((d, i) => (
              <li key={d.title}>
                <span className="steps__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="t-ben">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">Benefícios para o cliente</p>
            <h2 id="t-ben">Vantagens da terceirização de serviços</h2>
          </header>
          <div className="tiles">
            {benefits.map((b, i) => (
              <article key={b.title} className={`tile tile--${i}`}>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="t-dep">
        <div className="container">
          <header className="section__head">
            <p className="eyebrow">Depoimentos e confiança</p>
            <h2 id="t-dep">Quem contrata, recomenda</h2>
          </header>
          <figure className="quote">
            <svg className="quote__mark" width="48" height="48" viewBox="0 0 24 24" aria-hidden fill="currentColor"><path d="M9.5 6C6.5 7 4 9.6 4 13.5V18h6v-6H7.1c.2-2 1.5-3.5 3.4-4.3L9.5 6Zm10 0c-3 1-5.5 3.6-5.5 7.5V18h6v-6h-2.9c.2-2 1.5-3.5 3.4-4.3L19.5 6Z" /></svg>
            <blockquote><p>{testimonial.quote}</p></blockquote>
            <figcaption><strong>{testimonial.author}</strong> · {testimonial.company}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="t-faq">
        <div className="container narrow">
          <header className="section__head">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 id="t-faq">Perguntas sobre terceirização de serviços</h2>
          </header>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <JsonLd data={faqSchema} />
    </>
  );
}
