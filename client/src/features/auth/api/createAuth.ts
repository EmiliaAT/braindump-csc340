import axios from "axios";

export const createAuth = (username: string, password: string) =>
  axios.post<number>(`/api/auth?username=${username}&password=${password}`);
