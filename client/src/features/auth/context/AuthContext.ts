import { createContext } from "react";
import type User from "../../users/types/User";
import type { AuthAction } from "../types/AuthAction";

export const AuthContext = createContext<
  [User["id"] | undefined, (action: AuthAction) => void] | null
>(null);
