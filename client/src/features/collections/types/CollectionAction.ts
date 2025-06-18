import type { QueryAction } from "../../../types/query/QueryAction";
import type Article from "../../articles/types/Article";
import type Collection from "./Collection";

export interface CollectionDelete {
  kind: "delete";
  id: Collection["id"];
}

export interface CollectionAddArticle {
  kind: "add-article";
  collection: Collection["id"];
  article: Article["id"];
}

export interface CollectionRemoveArticle {
  kind: "remove-article";
  collection: Collection["id"];
  article: Article["id"];
}

export type CollectionAction =
  | QueryAction
  | CollectionDelete
  | CollectionAddArticle
  | CollectionRemoveArticle;
