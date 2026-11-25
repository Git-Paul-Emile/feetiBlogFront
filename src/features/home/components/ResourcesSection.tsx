import { AppLink } from "../../../components/ui/AppLink";
import { useArticles, useTutorials } from "../../content/content.queries";
import { ContentError, ContentLoading } from "../../../components/feedback/ContentStates";

export function ResourcesSection() {
  const articlesQuery = useArticles();
  const tutorialsQuery = useTutorials();
  if (articlesQuery.isPending || tutorialsQuery.isPending)
    return <ContentLoading label="Chargement des ressources…" />;
  if (articlesQuery.isError || tutorialsQuery.isError) return <ContentError />;
  const article = articlesQuery.data.items[0];
  const tutorial = tutorialsQuery.data.items[0];

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
        {article ? (
          <article className="resource-feature">
            <div className="resource-image">
              <img src={article.image} alt={article.title} />
              <span>Guide essentiel</span>
            </div>
            <div>
              <small>
                {article.category.toLocaleUpperCase("fr")} · {article.read}
              </small>
              <h3>{article.title}</h3>
              <AppLink href={`/blog/${article.slug}`}>
                Lire l’article <span>↗</span>
              </AppLink>
            </div>
          </article>
        ) : null}
        {tutorial ? (
          <article className="resource-small">
            <span className="play">▶</span>
            <div>
              <small>
                {tutorial.level.toLocaleUpperCase("fr")} · {tutorial.duration}
              </small>
              <h3>{tutorial.title}</h3>
              <AppLink href="/tutoriels">
                Voir le tutoriel <span>↗</span>
              </AppLink>
            </div>
          </article>
        ) : null}
        <article className="resource-small lime">
          <span>+</span>
          <div>
            <small>RESSOURCES FEETI</small>
            <h3>Retrouvez tous les articles et tutoriels disponibles.</h3>
            <AppLink href="/blog">
              Explorer le blog <span>↗</span>
            </AppLink>
          </div>
        </article>
      </div>
    </section>
  );
}
