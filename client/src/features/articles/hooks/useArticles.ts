import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/getArticles";

export default function useArticles() {
  const articles = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return articles;
}
