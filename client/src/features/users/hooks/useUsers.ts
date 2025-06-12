import { match, P } from "ts-pattern";
import {
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUserByName,
} from "../api/getUsers";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { User, Users } from "../types/User";
import type { QueryOne, UserQuery } from "../types/UserQuery";

export default function useUsers(_: QueryOne): UseQueryResult<User | null>;
export default function useUsers(): UseQueryResult<Users>;
export default function useUsers(
  query: UserQuery = undefined
): UseQueryResult<Users | (User | null)> {
  // ...
  const users = useQuery<Users | (User | null)>({
    queryKey: query === undefined ? ["query"] : ["query", query],
    queryFn: () =>
      match(query)
        .with({ id: P.select() }, getUserById)
        .with({ name: P.select() }, getUserByName)
        .with({ email: P.select() }, getUserByEmail)
        .otherwise(getAllUsers),
  });

  return users;
}
