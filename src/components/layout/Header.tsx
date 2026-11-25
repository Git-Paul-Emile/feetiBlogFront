import { useState } from "react";
import { platformLinks } from "../../platformLinks";
import { AppLink } from "../ui/AppLink";
import { Logo } from "../ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Logo />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">
        Menu
      </button>
      <nav className={open ? "nav-open" : ""}>
        <a href="/#produits" onClick={() => setOpen(false)}>
          Produits
        </a>
        <AppLink href="/tutoriels" onClick={() => setOpen(false)}>
          Tutoriels
        </AppLink>
        <AppLink href="/blog" onClick={() => setOpen(false)}>
          Blog
        </AppLink>
        <a href={platformLinks.ticket} onClick={() => setOpen(false)}>
          Feeti Ticket
        </a>
      </nav>
      <a className="button button-dark header-cta" href="mailto:hello@feeti.co">
        Parler à l’équipe <span>↗</span>
      </a>
    </header>
  );
}
