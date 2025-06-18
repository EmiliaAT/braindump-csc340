import type { QueryAction } from "../../../types/query/QueryAction";
import type User from "./User";

export interface AddSubscriptionAction {
  kind: "add-subscription";
  subscriber: User["id"];
  subscribee: User["id"];
}

export interface RemoveSubscriptionAction {
  kind: "remove-subscription";
  subscriber: User["id"];
  subscribee: User["id"];
}

export type UserAction =
  | QueryAction
  | AddSubscriptionAction
  | RemoveSubscriptionAction;
