import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/getArticles";
import type { ArticleAction } from "../types/ArticleAction";
import { match } from "ts-pattern";

export default function useArticles() {
  const articles = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles().then((articles) => articles.data),
    staleTime: Infinity,
  });

  const dispatch = (action: ArticleAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void articles.refetch())
      .exhaustive();
  };

  return [articles, dispatch] as const;
}
