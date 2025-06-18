import axios from "axios";
import type Article from "../../articles/types/Article";
import type Collection from "../types/Collection";

export const addArticleToCollection = (
  id: Collection["id"],
  articleId: Article["id"],
) =>
  axios.put(`/api/collections/${String(id)}`, null, { params: { articleId } });
