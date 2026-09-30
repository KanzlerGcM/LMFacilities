import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: "center", padding: "4rem 0" }}>
        <p className="eyebrow">Erro 404</p>
        <h1>Página não encontrada</h1>
        <p className="muted">O endereço que você acessou não existe ou foi movido.</p>
        <Link href="/" className="btn btn--primary">Voltar para o início</Link>
      </div>
    </section>
  );
}
