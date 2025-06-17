import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import type { UserAction } from "../types/UserAction";
import { match } from "ts-pattern";

export default function useUsers() {
  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers().then((users) => users.data),
    staleTime: Infinity,
  });

  const dispatch = (action: UserAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void users.refetch())
      .exhaustive();
  };

  return [users, dispatch] as const;
}
