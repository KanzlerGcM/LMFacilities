"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { services, whatsappLink } from "@/lib/site";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label="LM Facilities, página inicial">
          <Image src="/images/logo-mark.webp" alt="" width={40} height={40} priority />
          <span className="brand__text">
            <strong>LM FACILITIES</strong>
            <small>Terceirização de Serviços</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Menu principal">
          {nav.map((item) =>
            item.href === "/servicos" ? (
              <div className="nav__drop" key={item.href}>
                <Link href={item.href} className={isActive(item.href) ? "active" : ""}>{item.label}</Link>
                <div className="nav__menu">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/servicos/${s.slug}`}>{s.name}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>{item.label}</Link>
            ),
          )}
        </nav>

        <a href={whatsappLink()} className="btn btn--primary header__cta" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon width={18} height={18} /> Solicitar orçamento
        </a>

        <button className="menu-btn" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Menu mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>{item.label}</Link>
          ))}
          <div className="mobile__sub">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}`}>{s.name}</Link>
            ))}
          </div>
          <a href={whatsappLink()} className="btn btn--primary btn--block" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={18} height={18} /> Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
