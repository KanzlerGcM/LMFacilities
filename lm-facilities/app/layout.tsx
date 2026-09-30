import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, WhatsAppFloat } from "@/components/ui";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LM Facilities | Terceirização de Serviços em SP – Portaria, Limpeza e Recepção",
    template: "%s | LM Facilities",
  },
  description: site.description,
  keywords: [
    "terceirização de serviços", "terceirização de serviços SP", "empresa de facilities", "facilities São Paulo",
    "portaria terceirizada", "controlador de acesso", "limpeza terceirizada", "auxiliar de limpeza",
    "recepcionista terceirizada", "ronda patrimonial", "manutenção predial", "mão de obra terceirizada",
  ],
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "LM Facilities | Terceirização de Serviços em SP",
    description: site.description,
    images: [{ url: "/images/equipe.webp", width: 1088, height: 1344, alt: "Equipe LM Facilities" }],
  },
  twitter: { card: "summary_large_image", title: "LM Facilities | Terceirização de Serviços em SP", description: site.description, images: ["/images/equipe.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, email: true },
  category: "business",
};

export const viewport: Viewport = { themeColor: "#0b1f40", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={organizationSchema} />
      </body>
    </html>
  );
}
