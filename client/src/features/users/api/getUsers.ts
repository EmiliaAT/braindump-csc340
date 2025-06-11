import type { UserQuery, UserQueryReturn } from "../types/UserQuery";
import axios from "axios";

export default async function getUsers<T extends UserQuery>(
  query: T
): Promise<UserQueryReturn<T>> {
  switch (query.kind) {
    // ...
    case "id":
      return axios
        .get(`/api/users/${String(query.id)}`)
        .then((response) => response.data as UserQueryReturn<T>);
    // ...
    case "name":
      return axios
        .get(`/api/users/${query.name}`)
        .then((response) => response.data as UserQueryReturn<T>);
    // ...
    case "email":
      return axios
        .get(`/api/users/${query.email}`)
        .then((response) => response.data as UserQueryReturn<T>);
    // ...
    case "all":
      return axios
        .get("/api/users")
        .then((response) => response.data as UserQueryReturn<T>);
  }
}
