import { useNavigate, Link, Navigate } from "react-router";
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
import SubscriptionsList from "../../../components/subscriptions-list/SubscriptionsList";

export default function Dashboard() {
  const [users] = useUsers();
  const [articles, articlesDispatch] = useArticles();
  const [collections, collectionsDispatch] = useCollections();

  const [panel, setPanel] = useState<"article" | "collection">("article");

  const [subscriptionsMenu, setSubscriptionsMenu] = useState(false);

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
    return <Navigate to="/" replace />;
  }

  const filterSearch = (item: { title: string }) => {
    return filter ? item.title.includes(filter) : true;
  };

  const filterSubscription = (item: { author: User["id"] }) =>
    users.data
      .filter((sub) => user.subscriptions.includes(sub.id))
      .map((sub) => sub.id)
      .includes(item.author);

  const renderArticle = (article: Article, removable: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const author = users.data.find((user) => user.id == article.author)!;

    return (
      <div
        key={`a-${String(article.id)}`}
        className="flex flex-col gap-4 border-2 rounded-xl border-white p-4 cursor-pointer"
      >
        <div onClick={() => void navigate(`/articles/${String(article.id)}`)}>
          <p className="text-xl text-white font-bold">{article.title}</p>
          <p className="text-neutral-300">by {author.username}</p>
        </div>
        {removable && (
          <button
            type="button"
            className="w-full cursor-pointer rounded-xl bg-rose-500 px-6 py-3 font-bold text-white"
            onClick={() => {
              articlesDispatch({ kind: "delete", id: article.id });
            }}
          >
            Delete
          </button>
        )}
      </div>
    );
  };

  const renderCollection = (collection: Collection, removable: boolean) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const author = users.data.find((user) => user.id == collection.author)!;

    return (
      <div
        key={`c-${String(collection.id)}`}
        className="flex flex-col gap-4 border-2 rounded-xl border-white p-4 cursor-pointer"
      >
        <div
          onClick={() => void navigate(`/collections/${String(collection.id)}`)}
        >
          <p className="text-xl text-white font-bold">{collection.title}</p>
          <p className="text-neutral-300">by {author.username}</p>
        </div>
        {removable && (
          <button
            type="button"
            className="w-full cursor-pointer rounded-xl bg-rose-500 px-6 py-3 font-bold text-white"
            onClick={() => {
              collectionsDispatch({ kind: "delete", id: collection.id });
            }}
          >
            Delete
          </button>
        )}
      </div>
    );
  };

  return (
    <>
      {subscriptionsMenu && (
        <SubscriptionsList
          onClose={() => {
            setSubscriptionsMenu(false);
          }}
        />
      )}
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between align-items">
              <h2 className="text-xl font-bold text-white my-auto">
                Subscriptions
              </h2>
              <button
                type="button"
                className="text-neutral-950 bg-white px-6 py-3 rounded-xl cursor-pointer"
                onClick={() => {
                  setSubscriptionsMenu(true);
                }}
              >
                Remove Subscriptions
              </button>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {panel == "article"
                ? articles.data
                    .filter(filterSearch)
                    .filter(filterSubscription)
                    .map((article) => renderArticle(article, false))
                : collections.data
                    .filter(filterSearch)
                    .filter(filterSubscription)
                    .map((collection) => renderCollection(collection, false))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between align-items">
              <h2 className="text-xl font-bold text-white my-auto">{`My ${panel == "article" ? "Articles" : "Collections"}`}</h2>
              <button
                type="button"
                className="text-neutral-950 bg-white px-6 py-3 rounded-xl cursor-pointer"
              >
                Create {panel == "article" ? "Article" : "Collection"}
              </button>
            </div>
            <div className="grid grid-cols-4 gap-8">
              {panel == "article"
                ? articles.data
                    .filter(filterSearch)
                    .filter((article) => article.author == user.id)
                    .map((article) => renderArticle(article, true))
                : collections.data
                    .filter(filterSearch)
                    .filter((collection) => collection.author == user.id)
                    .map((collection) => renderCollection(collection, true))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
