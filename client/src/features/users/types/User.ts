import type { RawArticle } from "../../articles/types/Article";

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  homepage?: number;
}

export interface RawUser {
  user_id: number;
  email: string;
  username: string;
  password: string;
  homepage_id: Omit<RawArticle, "author_id">;
}

export type Users = readonly User[];

export type RawUsers = readonly RawUser[];

export function parseUser(src: RawUser): User {
  return {
    id: src.user_id,
    email: src.email,
    username: src.username,
    password: src.password,
    homepage: src.homepage_id.article_id,
  };
}
