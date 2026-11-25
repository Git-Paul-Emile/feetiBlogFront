import { AppLink } from "../../../components/ui/AppLink";
import {
  ContentEmpty,
  ContentError,
  ContentLoading,
} from "../../../components/feedback/ContentStates";
import { useArticles } from "../content.queries";

export function BlogPage() {
  const articlesQuery = useArticles();
  if (articlesQuery.isPending) return <ContentLoading label="Chargement des articles…" />;
  if (articlesQuery.isError) return <ContentError />;
  const articles = articlesQuery.data.items;
  if (articles.length === 0) return <ContentEmpty label="Aucun article n’est encore publié." />;
  const [featuredArticle, ...otherArticles] = articles;
  if (!featuredArticle) return <ContentEmpty label="Aucun article n’est encore publié." />;

  return (
    <>
      <main>
        <section
          className="editorial-hero blog-hero"
          style={{ backgroundColor: "rgb(132, 26, 239)" }}
        >
          <h1 style={{ color: "rgb(255, 255, 255)", fontWeight: 700 }}>
            Des idées qui font
            <br />
            <em style={{ color: "inherit" }}>bouger les Fééteurs.</em>
          </h1>
          <p style={{ color: "rgb(255, 255, 255)" }}>
            Stratégies, inspirations et bonnes pratiques pour créer des événements plus forts.
          </p>
        </section>
        <section className="blog-featured">
          <div>
            <img src={featuredArticle.image} alt={featuredArticle.title} />
            <span>À la une</span>
          </div>
          <article>
            <small>
              {featuredArticle.category} · {featuredArticle.read} de lecture
            </small>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <AppLink className="article-link" href={`/blog/${featuredArticle.slug}`}>
              Lire l’article <span>↗</span>
            </AppLink>
          </article>
        </section>
        <section className="articles-section">
          <div className="library-head">
            <div>
              <span className="eyebrow">À lire maintenant</span>
              <h2>Le plein de bonnes idées.</h2>
            </div>
            <span>{articles.length} articles</span>
          </div>
          <div className="article-grid">
            {otherArticles.map((article) => (
              <article key={article.title}>
                <div>
                  <img src={article.image} alt="" />
                </div>
                <small>
                  {article.category} · {article.read}
                </small>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <AppLink className="article-link" href={`/blog/${article.slug}`}>
                  Lire l’article <span>↗</span>
                </AppLink>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
