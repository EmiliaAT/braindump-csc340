import axios from "axios";
import type Article from "../types/Article";

export const deleteArticle = (id: Article["id"]) =>
  axios.delete(`/api/articles/${String(id)}`).then(() => id);
