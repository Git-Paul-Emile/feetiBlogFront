import type { CSSProperties } from "react";
import { AppLink } from "../../../components/ui/AppLink";

export function RegieSection() {
  return (
    <section className="regie-section">
      <div className="regie-copy">
        <span className="eyebrow">La régie Feeti</span>
        <h2 style={{ fontWeight: 700 }}>
          Tout votre événement.
          <br />
          Un seul poste de commande.
        </h2>
        <p>
          Feeti relie la création, la vente, la promotion et l’accueil de votre public dans une
          régie simple. Votre équipe partage les mêmes informations et agit au bon moment, sans
          jongler entre plusieurs outils.
        </p>
        <div className="regie-pillars">
          <div>
            <span>01</span>
            <p>
              <b>Vendre sans friction</b>
              <small>
                Billets flexibles, paiements sécurisés et pages personnalisées pour convertir chaque
                visite.
              </small>
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              <b>Remplir intelligemment</b>
              <small>
                Campagnes ciblées, liens de suivi et relances automatiques pour trouver votre
                public.
              </small>
            </p>
          </div>
          <div>
            <span>03</span>
            <p>
              <b>Piloter le jour J</b>
              <small>
                Scan mobile, équipes synchronisées et fréquentation en direct pour garder le
                contrôle.
              </small>
            </p>
          </div>
          <div>
            <span>04</span>
            <p>
              <b>Progresser après chaque date</b>
              <small>
                Ventes, revenus et performance marketing réunis dans des rapports lisibles.
              </small>
            </p>
          </div>
        </div>
        <AppLink className="button button-dark" href="/regie">
          Découvrir la régie <span>↗</span>
        </AppLink>
      </div>

      <div className="regie-console">
        <div className="regie-console-top">
          <div>
            <span className="mini-logo">f</span>
            <p>
              <small>Régie centrale</small>
              <b>Abidjan Music Week</b>
            </p>
          </div>
          <span className="regie-live">
            <i />
            En direct
          </span>
        </div>
        <div className="regie-kpis">
          <div>
            <small>Billets vendus</small>
            <b>3 842</b>
            <span>+16% cette semaine</span>
          </div>
          <div>
            <small>Chiffre d’affaires</small>
            <b>18,4M</b>
            <span>FCFA · +24%</span>
          </div>
          <div>
            <small>Participants</small>
            <b>1 284</b>
            <span>92% scannés</span>
          </div>
        </div>
        <div className="regie-chart">
          <div className="regie-chart-head">
            <p>
              <small>Rythme des ventes</small>
              <b>Les 7 derniers jours</b>
            </p>
            <span>Objectif : 4 500</span>
          </div>
          <div className="regie-bars">
            {[38, 53, 47, 66, 59, 78, 94].map((height, index) => (
              <i
                key={height}
                style={
                  {
                    "--bar-height": `${height}%`,
                    "--bar-delay": `${index * 90}ms`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <div className="regie-days">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mer</span>
            <span>Jeu</span>
            <span>Ven</span>
            <span>Sam</span>
            <span>Dim</span>
          </div>
        </div>
        <div className="regie-activity">
          <div>
            <span className="activity-icon">✓</span>
            <p>
              <b>Pass VIP scanné</b>
              <small>Entrée principale · à l’instant</small>
            </p>
          </div>
          <div>
            <span className="activity-icon campaign-icon">↗</span>
            <p>
              <b>Campagne à 74% de l’objectif</b>
              <small>Relance finale programmée à 18:00</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
