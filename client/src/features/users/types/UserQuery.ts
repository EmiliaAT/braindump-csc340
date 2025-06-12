export interface QueryId {
  id: number;
}

export interface QueryName {
  name: string;
}

export interface QueryEmail {
  email: string;
}

export type QueryOne = QueryId | QueryName | QueryEmail;

export type UserQuery = QueryOne | undefined;
