import { AppLink } from "../../../components/ui/AppLink";
import type { Article } from "../content.data";

export function ArticlePage({ article }: { article: Article }) {
  return (
    <main className="article-page">
      <header className="article-header">
        <AppLink href="/blog" className="article-back">
          ← Retour au blog
        </AppLink>
        <div className="article-meta">
          <span>{article.category}</span>
          <span>{article.read} de lecture</span>
        </div>
        <h1>{article.title}</h1>
        <p>{article.lead}</p>
      </header>

      <figure className="article-cover">
        <img src={article.image} alt="" />
      </figure>

      <div className="article-layout">
        <aside>
          <span>Dans cet article</span>
          {article.sections.map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.title}>
              {String(index + 1).padStart(2, "0")} · {section.title}
            </a>
          ))}
        </aside>

        <article className="article-body">
          {article.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="article-end">
            <span>À retenir</span>
            <h2>Les meilleurs événements progressent à chaque édition.</h2>
            <p>
              Transformez ces conseils en plan d’action, partagez-le avec votre équipe et mesurez
              les résultats depuis Feeti.
            </p>
            <a className="button button-dark" href="mailto:hello@feeti.co">
              Créer avec Feeti <span>↗</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
