import axios from "axios";
import {
  parseArticle,
  type Article,
  type Articles,
  type RawArticle,
  type RawArticles,
} from "../types/Article";

export const getArticleById = async (id: number): Promise<Article | null> =>
  axios
    .get<RawArticle | null>(`/api/articles/${String(id)}`)
    .then((response) => response.data)
    .then((response) => (response ? parseArticle(response) : null));

export const getArticleByName = async (name: string): Promise<Article | null> =>
  axios
    .get<RawArticle | null>(`/api/articles/${name}`)
    .then((response) => response.data)
    .then((response) => (response ? parseArticle(response) : null));

export const getArticles = async (): Promise<Articles> =>
  axios
    .get<RawArticles>("/api/articles")
    .then((response) => response.data)
    .then((articles) => articles.map(parseArticle));
