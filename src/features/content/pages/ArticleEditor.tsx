import { useState, type FormEvent } from "react";
import { ApiError } from "../../../api/ApiError";
import { articleInputSchema } from "../content.schemas";
import { useUploadArticleImage } from "../content.queries";
import type { Article, ArticleInput, Category } from "../content.types";

interface DraftSection {
  key: string;
  title: string;
  paragraphsText: string;
}

interface ArticleDraft {
  title: string;
  slug: string;
  categorySlug: string;
  excerpt: string;
  lead: string;
  imageUrl: string;
  imagePublicId: string;
  sections: DraftSection[];
}

interface ArticleEditorProps {
  article?: Article;
  categories: Category[];
  busy: boolean;
  onCancel: () => void;
  onSave: (input: ArticleInput) => Promise<void>;
}

function createEmptyDraft(categorySlug: string): ArticleDraft {
  return {
    title: "",
    slug: "",
    categorySlug,
    excerpt: "",
    lead: "",
    imageUrl: "",
    imagePublicId: "",
    sections: [{ key: crypto.randomUUID(), title: "", paragraphsText: "" }],
  };
}

function createDraft(article: Article, categories: Category[]): ArticleDraft {
  const category = categories.find((item) => item.name === article.category);
  return {
    title: article.title,
    slug: article.slug,
    categorySlug: category?.slug ?? "",
    excerpt: article.excerpt,
    lead: article.lead,
    imageUrl: article.image,
    imagePublicId: article.imagePublicId,
    sections: article.sections.map((section) => ({
      key: crypto.randomUUID(),
      title: section.title,
      paragraphsText: section.paragraphs.join("\n"),
    })),
  };
}

export function ArticleEditor({ article, categories, busy, onCancel, onSave }: ArticleEditorProps) {
  const [draft, setDraft] = useState(() =>
    article ? createDraft(article, categories) : createEmptyDraft(categories[0]?.slug ?? ""),
  );
  const [error, setError] = useState("");
  const uploadImage = useUploadArticleImage();

  function changeField<Field extends keyof Omit<ArticleDraft, "sections">>(
    field: Field,
    value: ArticleDraft[Field],
  ) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function changeSection(key: string, field: "title" | "paragraphsText", value: string) {
    setDraft((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.key === key ? { ...section, [field]: value } : section,
      ),
    }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (busy) return;
    if (uploadImage.isPending) {
      setError("Attendez la fin de l’import Cloudinary avant d’enregistrer.");
      return;
    }
    const input = {
      title: draft.title,
      ...(draft.slug.trim() ? { slug: draft.slug.trim() } : {}),
      categorySlug: draft.categorySlug,
      excerpt: draft.excerpt,
      lead: draft.lead,
      imageUrl: draft.imageUrl,
      ...(draft.imagePublicId ? { imagePublicId: draft.imagePublicId } : {}),
      sections: draft.sections.map(({ title, paragraphsText }) => ({
        title,
        paragraphs: paragraphsText
          .split(/\r?\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean),
      })),
    };
    const result = articleInputSchema.safeParse(input);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Vérifiez le contenu de l’article.");
      return;
    }
    try {
      await onSave(result.data);
    } catch (saveError) {
      setError(
        saveError instanceof ApiError ? saveError.message : "L’article n’a pas pu être enregistré.",
      );
    }
  }

  return (
    <form className="admin-editor" onSubmit={submit} noValidate>
      <div className="admin-editor-heading">
        <div>
          <span className="eyebrow">{article ? "Modifier" : "Nouvel article"}</span>
          <h2>{article ? article.title : "Rédiger un article"}</h2>
        </div>
        <button className="text-link" type="button" onClick={onCancel}>
          Annuler
        </button>
      </div>
      <label htmlFor="article-title">Titre</label>
      <input
        id="article-title"
        value={draft.title}
        onChange={(event) => changeField("title", event.target.value)}
      />
      <label htmlFor="article-slug">Adresse de l’article</label>
      <input
        id="article-slug"
        value={draft.slug}
        onChange={(event) => changeField("slug", event.target.value)}
        aria-describedby="slug-help"
      />
      <small id="slug-help">Laissez ce champ vide pour créer une adresse depuis le titre.</small>
      <label htmlFor="article-category">Catégorie</label>
      <select
        id="article-category"
        value={draft.categorySlug}
        onChange={(event) => changeField("categorySlug", event.target.value)}
      >
        <option value="">Choisissez une catégorie</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
      <label htmlFor="article-excerpt">Résumé</label>
      <textarea
        id="article-excerpt"
        rows={3}
        value={draft.excerpt}
        onChange={(event) => changeField("excerpt", event.target.value)}
      />
      <label htmlFor="article-lead">Introduction</label>
      <textarea
        id="article-lead"
        rows={5}
        value={draft.lead}
        onChange={(event) => changeField("lead", event.target.value)}
      />
      <label htmlFor="article-image-file">Image de couverture</label>
      <input
        id="article-image-file"
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (!file) return;
          event.target.value = "";
          if (file.size > 5 * 1024 * 1024) {
            setError("L’image doit peser moins de 5 Mo.");
            return;
          }
          setError("");
          void uploadImage
            .mutateAsync(file)
            .then((image) => {
              setDraft((current) => ({
                ...current,
                imageUrl: image.secureUrl,
                imagePublicId: image.publicId,
              }));
            })
            .catch((uploadError: unknown) => {
              setError(
                uploadError instanceof ApiError
                  ? uploadError.message
                  : "L’import Cloudinary a échoué.",
              );
            });
        }}
      />
      {uploadImage.isPending ? (
        <small role="status">Import de l’image dans Cloudinary…</small>
      ) : null}
      {draft.imageUrl ? (
        <small role="status">Image prête pour l’article.</small>
      ) : (
        <small>JPG, PNG ou WebP, 5 Mo maximum. L’image sera stockée sur Cloudinary.</small>
      )}
      {draft.imageUrl ? (
        <img
          className="article-image-preview"
          src={draft.imageUrl}
          alt="Aperçu de l’image de couverture"
        />
      ) : null}
      <fieldset className="article-sections-editor">
        <legend>Contenu de l’article</legend>
        {draft.sections.map((section, index) => (
          <div className="article-section-editor" key={section.key}>
            <div className="admin-editor-heading">
              <h3>Section {index + 1}</h3>
              {draft.sections.length > 1 ? (
                <button
                  className="text-link"
                  type="button"
                  onClick={() =>
                    setDraft((current) => ({
                      ...current,
                      sections: current.sections.filter((item) => item.key !== section.key),
                    }))
                  }
                >
                  Supprimer cette section
                </button>
              ) : null}
            </div>
            <label htmlFor={`section-title-${section.key}`}>Titre de section</label>
            <input
              id={`section-title-${section.key}`}
              value={section.title}
              onChange={(event) => changeSection(section.key, "title", event.target.value)}
            />
            <label htmlFor={`section-paragraphs-${section.key}`}>Paragraphes, un par ligne</label>
            <textarea
              id={`section-paragraphs-${section.key}`}
              rows={6}
              value={section.paragraphsText}
              onChange={(event) => changeSection(section.key, "paragraphsText", event.target.value)}
            />
          </div>
        ))}
        <button
          className="text-link"
          type="button"
          onClick={() =>
            setDraft((current) => ({
              ...current,
              sections: [
                ...current.sections,
                { key: crypto.randomUUID(), title: "", paragraphsText: "" },
              ],
            }))
          }
        >
          Ajouter une section
        </button>
      </fieldset>
      {error ? (
        <p className="form-message form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="button button-dark" type="submit" aria-busy={busy}>
        {busy ? "Enregistrement…" : "Enregistrer l’article"}
      </button>
    </form>
  );
}
