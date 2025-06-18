import axios from "axios";
import type User from "../../users/types/User";

export const createAuth = (username: string, password: string) =>
  axios.post<User>("/api/auth", null, { params: { username, password } });
