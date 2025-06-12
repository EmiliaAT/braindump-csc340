import { match } from "ts-pattern";
import "./Dashboard.css";
import useArticles from "../../../features/articles/hooks/useArticles";
import Header from "../../../components/header/Header";
import { useNavigate } from "react-router";
import { useState, type ChangeEvent } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("");

  const articles = useArticles();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
    console.log(event.currentTarget.value);
  };

  const handleNavigate = (key: "dashboard") =>
    match(key).with("dashboard", () => void navigate("/dashboard"));

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} onNavigate={handleNavigate} />
      <main className="content-container">
        {match(articles)
          .with({ isLoading: true }, () => <p>"Loading..."</p>)
          .with({ isError: true }, () => <p>"Error!"</p>)
          .otherwise((articles) => (
            <>
              {articles.data
                ?.filter((article) =>
                  filter === "" ? true : article.title.includes(filter)
                )
                .map((article) => (
                  <p key={article.id}>{JSON.stringify(article)}</p>
                ))}
            </>
          ))}
      </main>
    </div>
  );
}
