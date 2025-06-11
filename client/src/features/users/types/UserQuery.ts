import type { User, Users } from "./User";

interface QueryId {
  kind: "id";
  id: number;
}

interface QueryName {
  kind: "name";
  name: string;
}

interface QueryEmail {
  kind: "email";
  email: string;
}

interface QueryAll {
  kind: "all";
}

export type UserQuery = QueryId | QueryName | QueryEmail | QueryAll;

export type UserQueryReturn<T> = T extends QueryId
  ? User | null
  : T extends QueryName
  ? User | null
  : T extends QueryEmail
  ? User | null
  : T extends QueryAll
  ? Users
  : never;
