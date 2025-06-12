import {
  parseUser,
  type RawUser,
  type RawUsers,
  type User,
  type Users,
} from "../types/User";
import axios from "axios";

export const getUserById = async (id: number): Promise<User | null> =>
  axios
    .get<RawUser | null>(`/api/users/${String(id)}`)
    .then((response) => response.data)
    .then((response) => (response ? parseUser(response) : null));

export const getUserByName = async (name: string): Promise<User | null> =>
  axios
    .get<RawUser | null>(`/api/users/${name}`)
    .then((response) => response.data)
    .then((response) => (response ? parseUser(response) : null));

export const getUserByEmail = async (email: string): Promise<User | null> =>
  axios
    .get<RawUser | null>(`/api/users/${email}`)
    .then((response) => response.data)
    .then((response) => (response ? parseUser(response) : null));

export const getAllUsers = async (): Promise<Users> =>
  axios
    .get<RawUsers>("/api/users")
    .then((response) => response.data)
    .then((response) => response.map(parseUser));
