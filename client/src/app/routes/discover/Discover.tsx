import { useState } from "react";
import useArticles from "../../../features/articles/hooks/useArticles";
import useCollections from "../../../features/collections/hooks/useCollections";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../features/auth/hooks/useAuth";
import useUsers from "../../../features/users/hooks/useUsers";

export default function Discover() {
  const [users] = useUsers();
  const [articles] = useArticles();
  const [collections] = useCollections();

  const [panel, setPanel] = useState<"article" | "collection">("article");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

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

  const handleTogglePanel = () => {
    setPanel(panel == "article" ? "collection" : "article");
  };

  const handleAuthButton = () => {
    if (user === undefined) {
      void navigate("/login");
    } else {
      authDispatch({ kind: "logoff" });
    }
  };

  const user =
    userId === undefined
      ? undefined
      : users.data.find((user) => user.id == userId);

  return (
    <div className="dark:bg-gray-900 min-h-screen min-w-screen">
      <div className="flex flex-row justify-between w-full p-8 items-center">
        <div />
        <div />
        <div className="flex flex-row gap-8">
          <Link className="text-white text-xl cursor-pointer" to="/discover">
            Discover
          </Link>
          <Link className="text-white text-xl cursor-pointer" to="/dashboard">
            Dashboard
          </Link>
          <button
            type="button"
            className="text-white text-xl cursor-pointer"
            onClick={handleAuthButton}
          >
            {user === undefined
              ? "Login / Sign Up"
              : `Sign Off [${user.username}]`}
          </button>
        </div>
      </div>
      <div className="p-8">
        <button
          type="button"
          className="text-white text-xl font-bold cursor-pointer"
          onClick={handleTogglePanel}
        >
          {panel == "article" ? "Articles" : "Collections"}
        </button>
        <div>
          {panel == "article"
            ? articles.data.map((article) => (
                <p
                  key={`a-${String(article.id)}`}
                  className="text-white text-xl cursor-pointer"
                  onClick={() =>
                    void navigate(`/articles/${String(article.id)}`)
                  }
                >
                  {JSON.stringify(article, null, 2)}
                </p>
              ))
            : collections.data.map((collection) => (
                <p
                  key={`c-${String(collection.id)}`}
                  className="text-white text-xl cursor-pointer"
                  onClick={() =>
                    void navigate(`/collections/${String(collection.id)}`)
                  }
                >
                  {JSON.stringify(collection, null, 2)}
                </p>
              ))}
        </div>
      </div>
    </div>
  );
}
