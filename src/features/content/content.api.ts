import { apiRequest } from "../../api/client";
import type { CollectionPage } from "../../api/types";
import type {
  Article,
  ArticleInput,
  Category,
  InfoPageContent,
  Tutorial,
  UploadedArticleImage,
} from "./content.types";

const fullCollection = "?page=1&limit=100";

export const contentApi = {
  listArticles: () => apiRequest<CollectionPage<Article>>(`/content/articles${fullCollection}`),
  getArticle: (slug: string) =>
    apiRequest<Article>(`/content/articles/${encodeURIComponent(slug)}`),
  listTutorials: () => apiRequest<CollectionPage<Tutorial>>(`/content/tutorials${fullCollection}`),
  getInfoPage: (slug: string) =>
    apiRequest<InfoPageContent>(`/content/pages/${encodeURIComponent(slug)}`),
  listCategories: () =>
    apiRequest<CollectionPage<Category>>(`/content/categories${fullCollection}`),
  uploadArticleImage: (file: File) => {
    const body = new FormData();
    body.append("image", file);
    return apiRequest<UploadedArticleImage>("/content/images", { method: "POST", body });
  },
  createArticle: (input: ArticleInput) =>
    apiRequest<Article>("/content/articles", { method: "POST", body: JSON.stringify(input) }),
  updateArticle: (slug: string, input: ArticleInput) =>
    apiRequest<Article>(`/content/articles/${encodeURIComponent(slug)}`, {
      method: "PUT",
      body: JSON.stringify(input),
    }),
  deleteArticle: (slug: string) =>
    apiRequest<void>(`/content/articles/${encodeURIComponent(slug)}`, { method: "DELETE" }),
};
