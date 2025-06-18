import type { QueryAction } from "../../../types/query/QueryAction";
import type User from "./User";

export interface RemoveSubscriptionAction {
  kind: "remove-subscription";
  subscriber: User["id"];
  subscribee: User["id"];
}

export type UserAction = QueryAction | RemoveSubscriptionAction;
