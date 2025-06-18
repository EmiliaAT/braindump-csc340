import type { QueryAction } from "../../../types/query/QueryAction";
import type Collection from "./Collection";

export interface CollectionDelete {
  kind: "delete";
  id: Collection["id"];
}

export type CollectionAction = QueryAction | CollectionDelete;
