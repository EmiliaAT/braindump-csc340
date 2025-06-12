import "./App.css";
import { match } from "ts-pattern";
import useArticles from "../features/articles/hooks/useArticles";

export default function App() {
  const articles = useArticles();

  return (
    <p>
      {match(articles)
        .with({ isLoading: true }, () => "Loading...")
        .with({ isError: true }, () => "Error!")
        .otherwise((article) => JSON.stringify(article.data))}
    </p>
  );
}
