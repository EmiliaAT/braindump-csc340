import axios from "axios";
import type Collection from "../types/Collection";
import type Article from "../../articles/types/Article";

export const deleteCollection = (id: Collection["id"]) =>
  axios.delete(`/api/collections/${String(id)}`).then(() => id);

export const deleteArticleFromCollection = (
  id: Collection["id"],
  articleId: Article["id"],
) => axios.delete(`/api/collections/${String(id)}`, { params: { articleId } });
