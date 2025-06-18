import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCollections } from "../api/getCollections";
import type { CollectionAction } from "../types/CollectionAction";
import { match } from "ts-pattern";
import type Collection from "../types/Collection";
import {
  deleteArticleFromCollection,
  deleteCollection,
} from "../api/deleteCollection";
import type Article from "../../articles/types/Article";

export default function useCollections() {
  const client = useQueryClient();

  const collections = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections().then((collections) => collections.data),
    // staleTime: Infinity,
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

  const removeArticleMutation = useMutation({
    mutationFn: ({
      id,
      articleId,
    }: {
      id: Collection["id"];
      articleId: Article["id"];
    }) => deleteArticleFromCollection(id, articleId),
    onSuccess: () =>
      client.invalidateQueries({ queryKey: ["collections", "articles"] }),
  });

  const dispatch = (action: CollectionAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void collections.refetch())
      .with({ kind: "delete" }, ({ id }) => {
        deleteMutation.mutate(id);
      })
      .with({ kind: "remove" }, ({ collection, article }) => {
        removeArticleMutation.mutate({
          id: collection,
          articleId: article,
        });
      })
      .exhaustive();
  };

  return [collections, dispatch] as const;
}
