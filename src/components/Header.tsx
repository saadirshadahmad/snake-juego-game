import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left Side: Brand Logo */}
        <div className="header-left">
          <Link
            href="/"
            className="brand-logo"
            aria-label="SNAKEJUEGO — Inicio"
          >
            SNAKEJUEGO
          </Link>
        </div>

        {/* Right Side: Theme Toggle on the left, Menu Button to its right */}
        <div className="header-right">
          <ThemeToggle />
          <Menu />
        </div>
      </div>
    </header>
  );
}
