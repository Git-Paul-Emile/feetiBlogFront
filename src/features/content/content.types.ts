import type { CollectionPage } from "../../api/types";

export interface ArticleSection {
  title: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  category: string;
  read: string;
  title: string;
  excerpt: string;
  lead: string;
  image: string;
  imagePublicId: string;
  sections: ArticleSection[];
}

export interface ArticleInput {
  title: string;
  slug?: string;
  categorySlug: string;
  excerpt: string;
  lead: string;
  imageUrl: string;
  imagePublicId?: string;
  sections: ArticleSection[];
}

export interface Tutorial {
  duration: string;
  level: string;
  title: string;
  description: string;
  image: string;
}

export interface InfoPageContent {
  eyebrow: string;
  title: string;
  intro: string;
  sections: string[];
}

export interface Category {
  slug: string;
  name: string;
}

export interface UploadedArticleImage {
  publicId: string;
  secureUrl: string;
}

export type ArticlePage = CollectionPage<Article>;
export type TutorialPage = CollectionPage<Tutorial>;
