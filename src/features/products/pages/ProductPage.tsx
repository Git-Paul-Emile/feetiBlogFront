import type { CSSProperties } from "react";
import { AppLink } from "../../../components/ui/AppLink";
import { CtaSection } from "../../../components/ui/CtaSection";
import { DashboardVisual } from "../../../components/ui/DashboardVisual";
import { products } from "../products.data";
import type { Product } from "../products.types";

export function ProductPage({ product }: { product: Product }) {
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  return (
    <>
      <main>
        <section
          className="product-hero"
          style={{ "--accent": product.accent, "--soft": product.soft } as CSSProperties}
        >
          <div className="breadcrumb">
            <AppLink href="/">Accueil</AppLink>
            <span>/</span>
            <span>{product.name}</span>
          </div>
          <div className="product-hero-grid">
            <div className="product-hero-copy">
              <span className="eyebrow">{product.eyebrow}</span>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div>
                <a className="button button-dark" href="mailto:hello@feeti.co">
                  Essayer {product.name} <span>↗</span>
                </a>
                <a className="text-link" href="#fonctionnalites">
                  Voir les fonctionnalités <span>↓</span>
                </a>
              </div>
            </div>
            <div className="product-visual-wrap">
              <div className="visual-orbit one" />
              <div className="visual-orbit two" />
              <figure className="product-photo">
                <img src={product.image} alt={product.imageAlt} />
                <figcaption>
                  <span>Impact mesuré</span>
                  <b>{product.stat}</b>
                </figcaption>
              </figure>
              <DashboardVisual product={product} large />
            </div>
          </div>
        </section>

        <section className="outcome">
          <span>Le résultat</span>
          <h2>{product.outcome}</h2>
        </section>

        <section className="features-section" id="fonctionnalites">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Tout ce qu’il vous faut</span>
              <h2>
                Puissant en coulisses.
                <br />
                Simple à utiliser.
              </h2>
            </div>
            <p>
              Chaque fonction a été pensée pour réduire les tâches répétitives et laisser plus de
              place à votre événement.
            </p>
          </div>
          <div className="feature-cards">
            {product.features.map((feature, index) => (
              <article key={feature.title}>
                <div className={`feature-icon icon-${index}`} style={{ background: product.soft }}>
                  <i />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="steps-section" style={{ "--accent": product.accent } as CSSProperties}>
          <div className="steps-title">
            <span className="eyebrow">Comment ça marche</span>
            <h2>
              En ligne en
              <br />
              trois temps.
            </h2>
            <p>Commencez simplement. Feeti s’occupe du reste.</p>
          </div>
          <div className="steps-list">
            {product.steps.map((step) => (
              <div key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <blockquote>“{product.quote}”</blockquote>
          <div>
            <span className="quote-avatar">F</span>
            <p>
              <b>Retour d’expérience</b>
              <small>{product.quoteAttribution}</small>
            </p>
          </div>
        </section>

        <section className="other-products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Toute la suite</span>
              <h2>
                Encore plus loin,
                <br />
                ensemble.
              </h2>
            </div>
            <AppLink href="/#produits" className="text-link">
              Voir tous les produits <span>↗</span>
            </AppLink>
          </div>
          <div className="other-grid">
            {others.map((item) => (
              <AppLink
                href={`/produits/${item.slug}`}
                key={item.slug}
                style={{ "--accent": item.accent, "--soft": item.soft } as CSSProperties}
              >
                <h3>{item.name}</h3>
                <p>{item.eyebrow}</p>
                <b>
                  Découvrir <span>↗</span>
                </b>
              </AppLink>
            ))}
          </div>
        </section>
        <section
          className="product-contact"
          style={{ "--accent": product.accent } as CSSProperties}
        >
          <span className="eyebrow">{product.name}</span>
          <h2>{product.cta}</h2>
          <a className="button button-dark" href={`mailto:${product.contact}`}>
            Écrire à {product.contact} <span>↗</span>
          </a>
        </section>
        <CtaSection />
      </main>
    </>
  );
}
