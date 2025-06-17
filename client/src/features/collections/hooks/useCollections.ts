import { useQuery } from "@tanstack/react-query";
import { getCollections } from "../api/getCollections";
import type { CollectionAction } from "../types/CollectionAction";
import { match } from "ts-pattern";

export default function useCollections() {
  const collections = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections().then((collections) => collections.data),
    staleTime: Infinity,
  });

  const dispatch = (action: CollectionAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void collections.refetch())
      .exhaustive();
  };

  return [collections, dispatch] as const;
}
