import { useState } from "react";
import { platformLinks } from "../../platformLinks";
import { AppLink } from "../ui/AppLink";
import { Logo } from "../ui/Logo";
import { useAdminLogout, useAdminSession } from "../../features/auth/auth.queries";
import { navigate } from "../../router/navigate";

export function Header() {
  const [open, setOpen] = useState(false);
  const sessionQuery = useAdminSession();
  const logoutMutation = useAdminLogout();
  const admin = sessionQuery.data?.admin;
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
        <a href={platformLinks.play} onClick={() => setOpen(false)}>
          Feeti Play
        </a>
        {admin ? (
          <>
            <AppLink href="/admin/articles" onClick={() => setOpen(false)}>
              Gérer le blog
            </AppLink>
            <button
              type="button"
              onClick={() => {
                logoutMutation.mutate(undefined, { onSuccess: () => navigate("/") });
                setOpen(false);
              }}
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <AppLink href="/connexion" onClick={() => setOpen(false)}>
            Connexion admin
          </AppLink>
        )}
      </nav>
      <a className="button button-dark header-cta" href="mailto:hello@feeti.co">
        Parler à l’équipe <span>↗</span>
      </a>
    </header>
  );
}
