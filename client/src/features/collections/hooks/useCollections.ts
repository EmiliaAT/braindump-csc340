import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCollections } from "../api/getCollections";
import type { CollectionAction } from "../types/CollectionAction";
import { match } from "ts-pattern";
import type Collection from "../types/Collection";
import { deleteCollection } from "../api/deleteCollection";

export default function useCollections() {
  const client = useQueryClient();

  const collections = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections().then((collections) => collections.data),
    staleTime: Infinity,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: Collection["id"]) => deleteCollection(id),
    onSuccess: (id) =>
      client.setQueryData(
        ["collections"],
        (collections: readonly Collection[]) =>
          collections.filter((collection) => collection.id != id),
      ),
  });

  const dispatch = (action: CollectionAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void collections.refetch())
      .with({ kind: "delete" }, ({ id }) => {
        deleteMutation.mutate(id);
      })
      .exhaustive();
  };

  return [collections, dispatch] as const;
}
