import type { User, Users } from "../types/User";
import type { QueryAll, QueryOne, UserQuery } from "../types/UserQuery";
import axios from "axios";

export default async function getUsers(_: QueryOne): Promise<User | null>;
export default async function getUsers(_: QueryAll): Promise<Users>;
export default async function getUsers(
  query: UserQuery
): Promise<Users | (User | null)> {
  switch (query.kind) {
    case "id":
      return getUserById(query.id);
    case "name":
      return getUserByName(query.name);
    case "email":
      return getUserByEmail(query.email);
    case "all":
      return getAllUsers();
  }
}

const getUserById = async (id: number) =>
  axios
    .get<User | null>(`/api/users/${String(id)}`)
    .then((response) => response.data);

const getUserByName = async (name: string) =>
  axios
    .get<User | null>(`/api/users/${name}`)
    .then((response) => response.data);

const getUserByEmail = async (email: string) =>
  axios
    .get<User | null>(`/api/users/${email}`)
    .then((response) => response.data);

const getAllUsers = async () =>
  axios.get<Users>("/api/users").then((response) => response.data);
