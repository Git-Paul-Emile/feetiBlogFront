import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { contentApi } from "./content.api";
import type { ArticleInput } from "./content.types";

export const contentQueryKeys = {
  articles: ["content", "articles"] as const,
  article: (slug: string) => ["content", "articles", slug] as const,
  tutorials: ["content", "tutorials"] as const,
  infoPage: (slug: string) => ["content", "pages", slug] as const,
  categories: ["content", "categories"] as const,
};

export function useArticles() {
  return useQuery({ queryKey: contentQueryKeys.articles, queryFn: contentApi.listArticles });
}

export function useArticle(slug: string) {
  return useQuery({
    queryKey: contentQueryKeys.article(slug),
    queryFn: () => contentApi.getArticle(slug),
    enabled: Boolean(slug),
  });
}

export function useTutorials() {
  return useQuery({ queryKey: contentQueryKeys.tutorials, queryFn: contentApi.listTutorials });
}

export function useInfoPage(slug: string) {
  return useQuery({
    queryKey: contentQueryKeys.infoPage(slug),
    queryFn: () => contentApi.getInfoPage(slug),
    enabled: Boolean(slug),
  });
}

export function useArticleCategories() {
  return useQuery({ queryKey: contentQueryKeys.categories, queryFn: contentApi.listCategories });
}

export function useUploadArticleImage() {
  return useMutation({ mutationFn: contentApi.uploadArticleImage });
}

export function useCreateArticle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contentApi.createArticle,
    onSuccess: async () => queryClient.invalidateQueries({ queryKey: contentQueryKeys.articles }),
  });
}

export function useUpdateArticle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ slug, input }: { slug: string; input: ArticleInput }) =>
      contentApi.updateArticle(slug, input),
    onSuccess: async () => queryClient.invalidateQueries({ queryKey: contentQueryKeys.articles }),
  });
}

export function useDeleteArticle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: contentApi.deleteArticle,
    onSuccess: async () => queryClient.invalidateQueries({ queryKey: contentQueryKeys.articles }),
  });
}
