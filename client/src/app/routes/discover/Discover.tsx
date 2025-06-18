import { useState } from "react";
import useArticles from "../../../features/articles/hooks/useArticles";
import useCollections from "../../../features/collections/hooks/useCollections";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../features/auth/hooks/useAuth";
import useUsers from "../../../features/users/hooks/useUsers";
import type Article from "../../../features/articles/types/Article";
import type Collection from "../../../features/collections/types/Collection";
import Header from "../../../components/header/Header";
import SearchBar from "../../../components/search-bar/SearchBar";

export default function Discover() {
  const [users] = useUsers();
  const [articles] = useArticles();
  const [collections] = useCollections();

  const [panel, setPanel] = useState<"article" | "collection">("article");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>();

  if (
    (panel == "article" && articles.isLoading) ||
    collections.isLoading ||
    users.isLoading
  ) {
    return <p>Loading...</p>;
  }
  if (!articles.data || !collections.data || !users.data) {
    return <p>An Error Occurred!</p>;
  }

  const handleAuthButton = () => {
    if (user === undefined) {
      void navigate("/login");
    } else {
      authDispatch({ kind: "logoff" });
      void navigate("/");
    }
  };

  const user =
    userId === undefined
      ? undefined
      : users.data.find((user) => user.id == userId);

  const filterSearch = (item: { title: string }) => {
    return filter ? item.title.includes(filter) : true;
  };

  const renderArticle = (article: Article) => (
    <p
      key={`a-${String(article.id)}`}
      className="cursor-pointer text-xl text-white"
      onClick={() => void navigate(`/articles/${String(article.id)}`)}
    >
      {JSON.stringify(article, null, 2)}
    </p>
  );

  const renderCollection = (collection: Collection) => (
    <p
      key={`c-${String(collection.id)}`}
      className="cursor-pointer text-xl text-white"
      onClick={() => void navigate(`/collections/${String(collection.id)}`)}
    >
      {JSON.stringify(collection, null, 2)}
    </p>
  );

  return (
    <div className="min-h-screen min-w-screen bg-neutral-950">
      <Header
        onSearchChange={(e) => {
          setFilter(e.currentTarget.value);
        }}
      >
        <Link className="cursor-pointer text-white underline" to="/discover">
          Discover
        </Link>
        {user !== undefined && (
          <Link className="cursor-pointer text-white" to="/dashboard">
            Dashboard
          </Link>
        )}
        <button
          type="button"
          className="cursor-pointer rounded-xl bg-white px-6 py-3 font-bold text-neutral-950"
          onClick={handleAuthButton}
        >
          {user === undefined ? "Sign In" : "Sign Out"}
        </button>
      </Header>
      <div className="flex flex-col gap-8 px-16 py-8">
        <SearchBar
          panel={panel}
          onSelectArticle={() => {
            setPanel("article");
          }}
          onSelectCollection={() => {
            setPanel("collection");
          }}
        />
        <div className="gap-8 grid grid-cols-4">
          {panel == "article"
            ? articles.data.filter(filterSearch).map(renderArticle)
            : collections.data.filter(filterSearch).map(renderCollection)}
        </div>
      </div>
    </div>
  );
}
