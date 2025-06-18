import axios from "axios";
import type User from "../types/User";

export const removeSubscriptionFromUser = (
  id: User["id"],
  subscribee: User["id"],
) => axios.delete(`/api/users/sub/${String(id)}`, { params: { subscribee } });
