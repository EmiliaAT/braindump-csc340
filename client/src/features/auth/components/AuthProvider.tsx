import { useState, type PropsWithChildren } from "react";
import type { AuthAction, AuthCreate, AuthLogin } from "../types/AuthAction";
import { match } from "ts-pattern";
import { createAuth } from "../api/createAuth";
import { getAuth } from "../api/getAuth";
import type User from "../../users/types/User";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User["id"]>();

  const handleLogin = (action: AuthLogin) =>
    void getAuth(action.username, action.password).then((response) => {
      match(response)
        .with({ status: 200 }, ({ data: { id } }) => {
          setUser(id);
          action.onSuccess?.();
        })
        .otherwise(() => action.onFailure?.());
    });

  const handleCreate = (action: AuthCreate) =>
    void createAuth(action.username, action.password).then((response) => {
      match(response)
        .with({ status: 200 }, ({ data: { id } }) => {
          setUser(id);
          action.onSuccess?.();
        })
        .otherwise(() => action.onFailure?.());
    });

  const handleLogoff = () => {
    setUser(undefined);
  };

  const dispatch = (action: AuthAction) => {
    match(action)
      .with({ kind: "login" }, handleLogin)
      .with({ kind: "create" }, handleCreate)
      .with({ kind: "logoff" }, handleLogoff)
      .exhaustive();
  };

  return (
    // eslint-disable-next-line react-x/no-unstable-context-value
    <AuthContext value={[user, dispatch]}>{children}</AuthContext>
  );
}
