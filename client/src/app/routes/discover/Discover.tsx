import useUsers from "../../../features/users/hooks/useUsers";
import useArticles from "../../../features/articles/hooks/useArticles";
import useCollections from "../../../features/collections/hooks/useCollections";
import type { UseQueryResult } from "@tanstack/react-query";
import { match } from "ts-pattern";

export default function Discover() {
  const [users, userDispatch] = useUsers();
  const [articles, articleDispatch] = useArticles();
  const [collections, collectionDispatch] = useCollections();

  const displayItems = (
    items: UseQueryResult<readonly { id: number }[], unknown>,
  ) =>
    match(items)
      .with({ isError: true }, () => <p>Error!</p>)
      .with({ isLoading: true }, () => <p>Loading...</p>)
      .with({ isSuccess: true }, ({ data: items }) => (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <p key={item.id}>{JSON.stringify(item, null, 2)}</p>
          ))}
        </div>
      ))
      .otherwise(() => <></>);

  const handleUserRefresh = () => {
    userDispatch({ kind: "refresh" });
  };
  const handleArticleRefresh = () => {
    articleDispatch({ kind: "refresh" });
  };
  const handleCollectionRefresh = () => {
    collectionDispatch({ kind: "refresh" });
  };

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Refresh Users */}
      <button
        type="button"
        className="cursor-pointer text-center text-xl font-bold"
        onClick={handleUserRefresh}
      >
        Users
      </button>
      {/* Refresh Articles */}
      <button
        type="button"
        className="cursor-pointer text-center text-xl font-bold"
        onClick={handleArticleRefresh}
      >
        Articles
      </button>
      {/* Refresh Collections */}
      <button
        type="button"
        className="cursor-pointer text-center text-xl font-bold"
        onClick={handleCollectionRefresh}
      >
        Collections
      </button>
      {/* Iterate Items */}
      {displayItems(users)}
      {displayItems(articles)}
      {displayItems(collections)}
    </div>
  );
}
