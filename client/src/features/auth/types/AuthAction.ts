export interface AuthLogin {
  kind: "login";
  username: string;
  password: string;
  onFailure?: () => void;
  onSuccess?: () => void;
}

export interface AuthCreate {
  kind: "create";
  username: string;
  password: string;
  onFailure?: () => void;
  onSuccess?: () => void;
}

export interface AuthLogoff {
  kind: "logoff";
}

export type AuthAction = AuthLogin | AuthCreate | AuthLogoff;
