import Link from "next/link";

export default function NotFound() {
  return (
    <article className="content-card not-found-card">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1>Página no encontrada</h1>
        <p className="lead">
          Lo sentimos, la página o artículo que estás buscando no existe, ha sido movida o la dirección es incorrecta.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">
            Volver a la página principal
          </Link>
          <Link href="/blog/" className="btn-secondary">
            Explorar artículos del blog
          </Link>
        </div>
      </div>
    </article>
  );
}
