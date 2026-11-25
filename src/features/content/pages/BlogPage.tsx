import { AppLink } from "../../../components/ui/AppLink";
import { articles } from "../content.data";

export function BlogPage() {
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
            <img src={articles[0].image} alt="Public d’un grand événement en plein air" />
            <span>À la une</span>
          </div>
          <article>
            <small>
              {articles[0].category} · {articles[0].read} de lecture
            </small>
            <h2>{articles[0].title}</h2>
            <p>{articles[0].excerpt}</p>
            <AppLink className="article-link" href={`/blog/${articles[0].slug}`}>
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
            {articles.slice(1).map((article) => (
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
