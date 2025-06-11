export interface QueryId {
  kind: "id";
  id: number;
}

export interface QueryName {
  kind: "name";
  name: string;
}

export interface QueryEmail {
  kind: "email";
  email: string;
}

export interface QueryAll {
  kind: "all";
}

export type QueryOne = QueryId | QueryName | QueryEmail;

export type UserQuery = QueryOne | QueryAll;
