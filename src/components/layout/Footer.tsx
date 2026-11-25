import { products } from "../../features/products/products.data";
import { AppLink } from "../ui/AppLink";
import { Logo } from "../ui/Logo";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <>
      <Newsletter />
      <footer>
        <div className="footer-top">
          <div>
            <Logo />
            <p>
              La plateforme qui fait grandir
              <br />
              vos événements.
            </p>
            <div className="footer-sites">
              <a href="https://play.feeti.co" target="_blank" rel="noreferrer">
                Feeti Play <span>↗</span>
              </a>
              <a href="https://tickets.feeti.co" target="_blank" rel="noreferrer">
                Feeti Ticket <span>↗</span>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <b>Produits</b>
              {products.map((p) => (
                <AppLink key={p.slug} href={`/produits/${p.slug}`}>
                  {p.name}
                </AppLink>
              ))}
            </div>
            <div>
              <b>Ressources</b>
              <AppLink href="/tutoriels">Tutoriels vidéo</AppLink>
              <AppLink href="/blog">Blog</AppLink>
              <a href="mailto:hello@feeti.co">Nous contacter</a>
            </div>
            <div>
              <b>Informations</b>
              <AppLink href="/faqs">FAQs</AppLink>
              <AppLink href="/brand-presse">Brand & Presse</AppLink>
              <AppLink href="/mentions-legales">Mentions légales</AppLink>
              <AppLink href="/cgu">CGU</AppLink>
              <AppLink href="/confidentialite">Politique de confidentialité</AppLink>
              <AppLink href="/remboursement">Politique de remboursement</AppLink>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Fééti.io, propulsé par Eroiste, Tous droits réservés.</span>
          <span>Abidjan · Dakar · partout où ça vibre</span>
        </div>
      </footer>
    </>
  );
}
