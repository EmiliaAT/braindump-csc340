import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import type { UserAction } from "../types/UserAction";
import { match } from "ts-pattern";
import { removeSubscriptionFromUser } from "../api/deleteUser";
import type User from "../types/User";
import { addSubscriptionToUser } from "../api/createUser";

export default function useUsers() {
  const client = useQueryClient();

  const users = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers().then((users) => users.data),
    staleTime: Infinity,
  });

  const addSubscriptionMutation = useMutation({
    mutationFn: ({
      subscriber,
      subscribee,
    }: {
      subscriber: User["id"];
      subscribee: User["id"];
    }) => addSubscriptionToUser(subscriber, subscribee),
    onSuccess: () => client.invalidateQueries({ queryKey: ["users"] }),
  });

  const removeSubscriptionMutation = useMutation({
    mutationFn: ({
      subscriber,
      subscribee,
    }: {
      subscriber: User["id"];
      subscribee: User["id"];
    }) => removeSubscriptionFromUser(subscriber, subscribee),
    onSuccess: () => client.invalidateQueries({ queryKey: ["users"] }),
  });

  const dispatch = (action: UserAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void users.refetch())
      .with({ kind: "add-subscription" }, ({ subscriber, subscribee }) => {
        addSubscriptionMutation.mutate({ subscriber, subscribee });
      })
      .with({ kind: "remove-subscription" }, ({ subscriber, subscribee }) => {
        removeSubscriptionMutation.mutate({ subscriber, subscribee });
      })
      .exhaustive();
  };

  return [users, dispatch] as const;
}
