import type { QueryAction } from "../../../types/query/QueryAction";
import type Article from "./Article";

export interface ArticleDelete {
  kind: "delete";
  id: Article["id"];
}

export type ArticleAction = QueryAction | ArticleDelete;
