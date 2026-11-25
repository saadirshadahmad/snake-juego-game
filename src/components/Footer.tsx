import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-section">
          <Link href="/" className="footer-logo" aria-label="SNAKEJUEGO — Inicio">
            SNAKEJUEGO
          </Link>
          <p className="footer-tagline">
            Tu portal independiente para disfrutar del juego Snake clásico en el navegador.
          </p>
        </div>

        {/* Main Navigation Links */}
        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <ul className="footer-links-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal Links */}
        <div className="footer-legal-nav">
          <ul className="footer-legal-list">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-legal-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            SNAKEJUEGO es un sitio independiente no afiliado a Google LLC. El juego Snake está alojado externamente por su proveedor.
          </p>
          <p className="footer-copyright">
            © {currentYear} SNAKEJUEGO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
