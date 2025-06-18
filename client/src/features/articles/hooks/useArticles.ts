import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getArticles } from "../api/getArticles";
import type { ArticleAction } from "../types/ArticleAction";
import { match } from "ts-pattern";
import type Article from "../types/Article";
import { deleteArticle } from "../api/deleteArticle";

export default function useArticles() {
  const client = useQueryClient();

  const articles = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles().then((articles) => articles.data),
    staleTime: Infinity,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: Article["id"]) => deleteArticle(id),
    onSuccess: (id) =>
      client.setQueryData(["articles"], (articles: readonly Article[]) =>
        articles.filter((article) => article.id != id),
      ),
  });

  const dispatch = (action: ArticleAction) => {
    match(action)
      .with({ kind: "refresh" }, () => void articles.refetch())
      .with({ kind: "delete" }, ({ id }) => {
        deleteMutation.mutate(id);
      })
      .exhaustive();
  };

  return [articles, dispatch] as const;
}
