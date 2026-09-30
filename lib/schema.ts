import { faqs, services, site } from "./site";

export const orgId = `${site.url}/#organizacao`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": orgId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/logo.webp`,
  image: `${site.url}/images/equipe.webp`,
  description: site.description,
  telephone: site.phoneE164,
  email: site.email,
  areaServed: { "@type": "State", name: "São Paulo", containedInPlace: { "@type": "Country", name: "Brasil" } },
  address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" },
  knowsLanguage: "pt-BR",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    email: site.email,
    contactType: "sales",
    areaServed: "BR-SP",
    availableLanguage: "Portuguese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços terceirizados",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site.url}/servicos/${s.slug}` },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
});
