import axios from "axios";
import type User from "../types/User";

export const addSubscriptionToUser = (id: User["id"], subscribee: User["id"]) =>
  axios.post(`/api/users/sub/${String(id)}`, null, { params: { subscribee } });
