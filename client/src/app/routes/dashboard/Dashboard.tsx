import { useNavigate, Link } from "react-router";
import useArticles from "../../../features/articles/hooks/useArticles";
import useAuth from "../../../features/auth/hooks/useAuth";
import useCollections from "../../../features/collections/hooks/useCollections";
import useUsers from "../../../features/users/hooks/useUsers";
import { useState } from "react";
import type Article from "../../../features/articles/types/Article";
import type Collection from "../../../features/collections/types/Collection";
import type User from "../../../features/users/types/User";
import Header from "../../../components/header/Header";
import SearchBar from "../../../components/search-bar/SearchBar";

export default function Dashboard() {
  const [users] = useUsers();
  const [articles] = useArticles();
  const [collections] = useCollections();

  const [panel, setPanel] = useState<"article" | "collection">("article");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

  const [filter, setFilter] = useState<string>();

  if (articles.isLoading || collections.isLoading || users.isLoading) {
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

  if (user === undefined) {
    return <p>You need to be authenticated to view this page!</p>;
  }

  const filterSearch = (item: { title: string }) => {
    return filter ? item.title.includes(filter) : true;
  };

  const filterSubscription = (item: { author: User["id"] }) =>
    users.data
      .filter((sub) => user.subscriptions.includes(sub.id))
      .map((sub) => sub.id)
      .includes(item.author);

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
        <Link className="cursor-pointer text-white" to="/discover">
          Discover
        </Link>
        <Link className="cursor-pointer text-white underline" to="/dashboard">
          Dashboard
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-xl bg-white px-6 py-3 font-bold text-neutral-950"
          onClick={handleAuthButton}
        >
          Sign Out
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
        <div>
          <h2 className="text-xl font-bold text-white">Subscriptions</h2>
          {panel == "article"
            ? articles.data
                .filter(filterSearch)
                .filter(filterSubscription)
                .map(renderArticle)
            : collections.data
                .filter(filterSearch)
                .filter(filterSubscription)
                .map(renderCollection)}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{`My ${panel == "article" ? "Articles" : "Collections"}`}</h2>
          {panel == "article"
            ? articles.data
                .filter(filterSearch)
                .filter((article) => article.author == user.id)
                .map(renderArticle)
            : collections.data
                .filter(filterSearch)
                .filter((collection) => collection.author == user.id)
                .map(renderCollection)}
        </div>
      </div>
    </div>
  );
}
