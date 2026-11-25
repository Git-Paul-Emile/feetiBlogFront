export function RegiePage() {
  return (
    <main>
      <section className="regie-page-hero">
        <div className="regie-page-copy">
          <span className="eyebrow">Feeti Régie · Pour les annonceurs</span>
          <h1>
            Votre marque au cœur
            <br />
            des expériences.
          </h1>
          <p>
            Touchez des communautés engagées au moment où elles choisissent, préparent et vivent
            leurs événements. Feeti réunit ciblage, formats et mesure dans une régie pensée pour
            l’impact.
          </p>
          <div>
            <a className="button button-green" href="mailto:regie@feeti.co">
              Lancer une campagne <span>↗</span>
            </a>
            <a className="text-link" href="#offre-regie">
              Découvrir l’offre <span>↓</span>
            </a>
          </div>
        </div>

        <div className="ad-preview">
          <div className="ad-preview-top">
            <span>Campagne en direct</span>
            <i>Active</i>
          </div>
          <div className="ad-creative">
            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85"
              alt="Public rassemblé pendant un événement"
            />
            <div>
              <small>Présenté par votre marque</small>
              <b>Vivez la prochaine grande expérience.</b>
              <span>En savoir plus ↗</span>
            </div>
          </div>
          <div className="ad-stats">
            <div>
              <small>Impressions</small>
              <b>284K</b>
              <span>+18%</span>
            </div>
            <div>
              <small>Engagement</small>
              <b>8,7%</b>
              <span>+2,4 pts</span>
            </div>
            <div>
              <small>Conversions</small>
              <b>4 921</b>
              <span>+12%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="regie-value" id="offre-regie">
        <div>
          <span className="eyebrow">Une audience en mouvement</span>
          <h2>Le bon message, dans le bon contexte.</h2>
        </div>
        <p>
          Feeti vous connecte à des publics réunis autour d’intérêts réels : musique, culture,
          sport, gastronomie, business et expériences locales.
        </p>
      </section>

      <section className="regie-offers">
        <article>
          <span>01</span>
          <h3>Ciblage contextuel</h3>
          <p>
            Activez vos campagnes selon les centres d’intérêt, les catégories d’événements, la
            localisation et les moments clés du parcours.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Formats intégrés</h3>
          <p>
            Gagnez en visibilité avec des placements natifs dans la découverte, les sélections
            éditoriales et les communications événementielles.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Impact mesurable</h3>
          <p>
            Suivez impressions, engagement et conversions depuis un tableau de bord partagé avec
            votre équipe.
          </p>
        </article>
      </section>

      <section className="regie-process">
        <div>
          <span className="eyebrow">De l’idée à l’impact</span>
          <h2>Une campagne en trois temps.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <div>
              <h3>Définissez votre objectif</h3>
              <p>
                Notoriété, considération, trafic ou conversion : nous cadrons le bon indicateur.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Choisissez vos audiences</h3>
              <p>Combinez intérêts, lieux et événements pour construire un ciblage pertinent.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Mesurez et optimisez</h3>
              <p>Suivez les résultats en direct et concentrez le budget sur ce qui fonctionne.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="regie-contact">
        <span className="eyebrow">Parlons de votre prochaine campagne</span>
        <h2>Votre audience est déjà là.</h2>
        <p>Construisons une activation utile, visible et mesurable avec la régie Feeti.</p>
        <a className="button button-green" href="mailto:regie@feeti.co">
          Contacter la régie <span>↗</span>
        </a>
      </section>
    </main>
  );
}
