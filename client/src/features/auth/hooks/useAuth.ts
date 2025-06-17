import { useState } from "react";
import type { AuthAction, AuthCreate, AuthLogin } from "../types/AuthAction";
import { match } from "ts-pattern";
import { getAuth } from "../api/getAuth";
import { createAuth } from "../api/createAuth";

export default function useAuth() {
  const [user, setUser] = useState<number>();

  const handleLogin = (action: AuthLogin) =>
    void getAuth(action.username, action.password).then((response) => {
      match(response)
        .with({ status: 200 }, ({ data: id }) => {
          setUser(id);
          action.onSuccess?.();
        })
        .otherwise(() => action.onFailure?.());
    });

  const handleCreate = (action: AuthCreate) =>
    void createAuth(action.username, action.password).then((response) => {
      match(response)
        .with({ status: 200 }, ({ data: id }) => {
          setUser(id);
          action.onSuccess?.();
        })
        .otherwise(() => action.onFailure?.());
    });

  const dispatch = (action: AuthAction) => {
    match(action)
      .with({ kind: "login" }, handleLogin)
      .with({ kind: "create" }, handleCreate)
      .exhaustive();
  };

  return [user, dispatch] as const;
}
