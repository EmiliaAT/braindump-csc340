import type { RawUser } from "../../users/types/User";

export interface Article {
  id: number;
  title: string;
  content: string;
  isPublic: boolean;
  author: number;
}

export interface RawArticle {
  article_id: number;
  title: string;
  content: string;
  is_public: boolean;
  author: Omit<Omit<RawUser, "articles">, "homepage">;
}

export type Articles = readonly Article[];

export type RawArticles = readonly RawArticle[];

export function parseArticle(src: RawArticle): Article {
  return {
    id: src.article_id,
    title: src.title,
    content: src.content,
    isPublic: src.is_public,
    author: src.author.user_id,
  };
}
