import type { CSSProperties } from "react";
import type { Product } from "../../features/products/products.types";

export function DashboardVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <div
      className={`dashboard ${large ? "dashboard-large" : ""}`}
      style={{ "--accent": product.accent } as CSSProperties}
    >
      <div className="dash-sidebar">
        <span className="mini-logo">f</span>
        {[1, 2, 3, 4, 5].map((i) => (
          <i key={i} className={i === Number(product.index) ? "active" : ""} />
        ))}
      </div>
      <div className="dash-main">
        <div className="dash-head">
          <div>
            <small>Bonjour Awa</small>
            <b>{product.name}</b>
          </div>
          <span className="avatar">AM</span>
        </div>
        {product.slug === "tickets" && (
          <div className="ticket-ui">
            <div className="event-thumb" />
            <div className="event-info">
              <small>À la une</small>
              <b>Abidjan Music Week</b>
              <span>18 oct. · Palais de la Culture</span>
              <button>Voir les billets</button>
            </div>
          </div>
        )}
        {product.slug === "play" && (
          <>
            <div className="stream-preview">
              <span>EN DIRECT</span>
              <i />
            </div>
            <div className="campaign">
              <b>Concert live · 1 842 spectateurs</b>
              <span className="progress">
                <i />
              </span>
              <small>Flux HD sécurisé · Accès PPV</small>
            </div>
          </>
        )}
        {product.slug === "acces" && (
          <>
            <div className="scan-card">
              <span className="scan-corners" />
              <b>Billet validé</b>
              <small>Sarah K. · Pass VIP</small>
            </div>
            <div className="check-count">
              <b>1 284</b>
              <span>participants présents</span>
            </div>
          </>
        )}
        {product.slug === "na-feeti" && (
          <>
            <div className="metric-row">
              <div>
                <small>Audience touchée</small>
                <b>86,4K</b>
                <em>+41%</em>
              </div>
              <div>
                <small>Ventes boostées</small>
                <b>1 264</b>
                <em>+38%</em>
              </div>
            </div>
            <div className="chart">
              {[38, 48, 43, 64, 58, 79, 92].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
