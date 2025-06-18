import axios from "axios";
import type User from "../../users/types/User";

export const getAuth = (username: string, password: string) =>
  axios.get<User>("/api/auth", { params: { username, password } });
