import type { RawUser } from "../../users/types/User";

export interface Article {
  id: number;
  title: string;
  content: string;
  public: boolean;
  author: number;
  createdBy: Date;
  updatedBy: Date;
}

export interface RawArticle {
  article_id: number;
  title: string;
  content: string;
  is_public: boolean;
  author: Omit<Omit<RawUser, "articles">, "homepage">;
  created_by: string;
  modified_by: string;
}

export type Articles = readonly Article[];

export type RawArticles = readonly RawArticle[];

export function parseArticle(src: RawArticle): Article {
  return {
    id: src.article_id,
    title: src.title,
    content: src.content,
    public: src.is_public,
    author: src.author.user_id,
    createdBy: new Date(src.created_by),
    updatedBy: new Date(src.modified_by),
  };
}
