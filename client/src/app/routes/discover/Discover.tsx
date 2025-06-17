import { useState } from "react";
import useArticles from "../../../features/articles/hooks/useArticles";
import useCollections from "../../../features/collections/hooks/useCollections";
import { useNavigate } from "react-router";

export default function Discover() {
  const [articles] = useArticles();
  const [collections] = useCollections();

  const [panel, setPanel] = useState<"article" | "collection">("article");

  const navigate = useNavigate();

  if ((panel == "article" && articles.isLoading) || collections.isLoading) {
    return <p>Loading...</p>;
  }
  if (!articles.data || !collections.data) {
    return <p>An Error Occurred!</p>;
  }

  const handleTogglePanel = () => {
    setPanel(panel == "article" ? "collection" : "article");
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen min-w-screen p-8">
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
                onClick={() => void navigate(`/articles/${String(article.id)}`)}
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
  );
}
