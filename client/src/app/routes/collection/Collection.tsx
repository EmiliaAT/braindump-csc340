import { Link, Navigate, useParams } from "react-router";
import useArticles from "../../../features/articles/hooks/useArticles";
import useCollections from "../../../features/collections/hooks/useCollections";
import useUsers from "../../../features/users/hooks/useUsers";
import useAuth from "../../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router";
import { useState } from "react";
import Header from "../../../components/header/Header";
import type Article from "../../../features/articles/types/Article";

export default function Collection() {
  const { id } = useParams();

  const collectionId = id ? Number(id) : undefined;

  const [users] = useUsers();
  const [articles] = useArticles();
  const [collections, collectionsDispatch] = useCollections();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

  const [, setFilter] = useState<string>();

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

  const collection =
    collectionId === undefined
      ? undefined
      : collections.data.find((collection) => collection.id == collectionId);

  if (collection === undefined) {
    return <Navigate to="/" replace />;
  }

  const renderArticle = (article: Article) => (
    <div key={`a-${String(article.id)}`} className="flex flex-col gap-4">
      <p
        className="cursor-pointer text-xl text-white"
        onClick={() => void navigate(`/articles/${String(article.id)}`)}
      >
        {JSON.stringify(article, null, 2)}
      </p>
      {collection.author == user?.id && (
        <button
          type="button"
          className="w-full cursor-pointer rounded-xl bg-rose-500 px-6 py-3 font-bold text-white"
          onClick={() => {
            collectionsDispatch({
              kind: "remove",
              collection: collection.id,
              article: article.id,
            });
          }}
        >
          Remove
        </button>
      )}
    </div>
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
        <div className="gap-8 grid grid-cols-4">
          {articles.data
            .filter((article) => article.collections.includes(collection.id))
            .map(renderArticle)}
        </div>
      </div>
    </div>
  );
}
