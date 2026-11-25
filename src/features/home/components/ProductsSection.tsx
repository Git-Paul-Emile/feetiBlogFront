import type { CSSProperties } from "react";
import { AppLink } from "../../../components/ui/AppLink";
import { DashboardVisual } from "../../../components/ui/DashboardVisual";
import { products } from "../../products/products.data";

export function ProductsSection() {
  return (
    <section className="products-section" id="produits">
      <div className="section-heading">
        <div>
          <span className="eyebrow">La suite Feeti</span>
          <h2 style={{ fontWeight: 700 }}>
            Un outil pour chaque
            <br />
            moment décisif.
          </h2>
        </div>
        <p>
          De la première annonce au dernier scan, tout fonctionne ensemble. Choisissez un produit ou
          adoptez toute la suite.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <AppLink
            href={`/produits/${product.slug}`}
            className="product-card"
            key={product.slug}
            style={{ "--accent": product.accent, "--soft": product.soft } as CSSProperties}
          >
            <div className="product-content">
              <span>{product.eyebrow}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <b>
                Découvrir le produit <span>↗</span>
              </b>
            </div>
            <div className="product-mini-visual">
              <DashboardVisual product={product} />
            </div>
          </AppLink>
        ))}
      </div>
    </section>
  );
}
