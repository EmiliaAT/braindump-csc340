import axios from "axios";
import type Article from "../types/Article";

export const getArticles = async () =>
  axios.get<readonly Article[]>("/api/articles");
