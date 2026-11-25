import { useState } from "react";
import { ApiError } from "../../../api/ApiError";
import { AppLink } from "../../../components/ui/AppLink";
import { useAdminSession } from "../../auth/auth.queries";
import {
  ContentEmpty,
  ContentError,
  ContentLoading,
} from "../../../components/feedback/ContentStates";
import {
  useArticleCategories,
  useArticles,
  useCreateArticle,
  useDeleteArticle,
  useUpdateArticle,
} from "../content.queries";
import type { Article, ArticleInput } from "../content.types";
import { ArticleEditor } from "./ArticleEditor";

export function AdminArticlesPage() {
  const sessionQuery = useAdminSession();
  const articlesQuery = useArticles();
  const categoriesQuery = useArticleCategories();
  const createArticle = useCreateArticle();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();
  const [editing, setEditing] = useState<Article | null>(null);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");

  if (sessionQuery.isPending) return <ContentLoading label="Vérification de la session…" />;
  if (sessionQuery.isError)
    return (
      <main className="admin-page">
        <section className="auth-card">
          <h1>Connexion requise</h1>
          <p>Connectez-vous avec un compte administrateur pour gérer les articles.</p>
          <AppLink className="button button-dark" href="/connexion">
            Se connecter
          </AppLink>
        </section>
      </main>
    );
  if (articlesQuery.isPending || categoriesQuery.isPending)
    return <ContentLoading label="Chargement des articles…" />;
  if (articlesQuery.isError || categoriesQuery.isError) return <ContentError />;

  const categories = categoriesQuery.data.items;
  const isSaving = createArticle.isPending || updateArticle.isPending;

  async function save(input: ArticleInput) {
    setError("");
    if (editing) await updateArticle.mutateAsync({ slug: editing.slug, input });
    else await createArticle.mutateAsync(input);
    setEditing(null);
    setCreating(false);
  }

  async function remove(article: Article) {
    if (!window.confirm(`Supprimer l’article « ${article.title} » ? Cette action est définitive.`))
      return;
    setError("");
    try {
      await deleteArticle.mutateAsync(article.slug);
    } catch (deleteError) {
      setError(deleteError instanceof ApiError ? deleteError.message : "La suppression a échoué.");
    }
  }

  return (
    <main className="admin-page">
      <header className="admin-page-heading">
        <div>
          <span className="eyebrow">Feeti Blog</span>
          <h1>Gestion des articles</h1>
          <p>Connecté en tant que {sessionQuery.data.admin.name}.</p>
        </div>
        <button
          className="button button-dark"
          type="button"
          onClick={() => {
            setEditing(null);
            setCreating(true);
          }}
        >
          Ajouter un article
        </button>
      </header>
      {error ? (
        <p className="form-message form-error" role="alert">
          {error}
        </p>
      ) : null}
      {creating || editing ? (
        <ArticleEditor
          article={editing ?? undefined}
          categories={categories}
          busy={isSaving}
          onCancel={() => {
            setEditing(null);
            setCreating(false);
          }}
          onSave={save}
        />
      ) : null}
      {articlesQuery.data.items.length === 0 ? (
        <ContentEmpty label="Aucun article. Ajoutez le premier depuis cette page." />
      ) : (
        <div className="admin-article-list">
          {articlesQuery.data.items.map((article) => (
            <article key={article.slug}>
              <div>
                <span className="eyebrow">
                  {article.category} · {article.read}
                </span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
              </div>
              <div className="admin-article-actions">
                <AppLink className="text-link" href={`/blog/${article.slug}`}>
                  Voir
                </AppLink>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => {
                    setCreating(false);
                    setEditing(article);
                  }}
                >
                  Modifier
                </button>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => void remove(article)}
                  aria-busy={deleteArticle.isPending}
                >
                  Supprimer
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
