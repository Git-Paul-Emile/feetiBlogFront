import { AppLink } from "../../../components/ui/AppLink";

export function ResourcesSection() {
  return (
    <section className="resource-section" id="ressources">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Le Feeti Lab</span>
          <h2>
            Apprenez. Testez.
            <br />
            Remplissez.
          </h2>
        </div>
        <p>Guides, bonnes pratiques et tutoriels vidéo pour aller plus vite et faire mieux.</p>
      </div>
      <div className="resource-grid">
        <article className="resource-feature">
          <div className="resource-image">
            <img
              src="https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?auto=format&fit=crop&w=1000&q=85"
              alt="Scène extérieure et son public"
            />
            <span>Guide essentiel</span>
          </div>
          <div>
            <small>STRATÉGIE · 8 MIN</small>
            <h3>Comment construire un lancement qui remplit votre événement</h3>
            <AppLink href="/blog">
              Découvrir le blog <span>↗</span>
            </AppLink>
          </div>
        </article>
        <article className="resource-small">
          <span className="play">▶</span>
          <div>
            <small>TUTORIEL VIDÉO · 6 MIN</small>
            <h3>Créer votre première billetterie en moins de 10 minutes</h3>
            <AppLink href="/tutoriels">
              Voir les tutoriels <span>↗</span>
            </AppLink>
          </div>
        </article>
        <article className="resource-small lime">
          <span>PDF</span>
          <div>
            <small>CHECKLIST · GRATUIT</small>
            <h3>Les 25 points à vérifier avant l’ouverture des portes</h3>
          </div>
        </article>
      </div>
    </section>
  );
}
