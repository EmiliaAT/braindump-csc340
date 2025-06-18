import { Navigate } from "react-router";
import type Article from "../../features/articles/types/Article";
import useAuth from "../../features/auth/hooks/useAuth";
import useCollections from "../../features/collections/hooks/useCollections";
import useUsers from "../../features/users/hooks/useUsers";

export interface CollectionsListProps {
  articleId: Article["id"];
  onClose: () => void;
}

export default function CollectionsList({
  articleId,
  onClose,
}: CollectionsListProps) {
  const [users] = useUsers();
  const [collections, collectionsDispatch] = useCollections();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId] = useAuth()!;

  if (collections.isLoading || users.isLoading) {
    return <p>Loading...</p>;
  }
  if (!collections.data || !users.data) {
    return <p>An Error Occurred!</p>;
  }

  const user =
    userId === undefined
      ? undefined
      : users.data.find((user) => user.id == userId);

  if (user === undefined) {
    return <Navigate to="/" replace />;
  }

  const userCollections = collections.data
    .filter((c) => c.author == user.id)
    .filter((c) => !c.articles.includes(articleId));

  return (
    <div className="z-10 fixed w-screen h-screen bg-[#17171780] flex">
      <div className="flex flex-col gap-4 m-auto w-1/3 p-8 bg-neutral-950 rounded-xl">
        {userCollections.length == 0 ? (
          <h2 className="font-extrabold text-2xl text-center w-full text-white">
            You have no Collections that do not contain this Article!
          </h2>
        ) : (
          <>
            {userCollections.map((c) => (
              <button
                type="button"
                key={c.id}
                className="cursor-pointer rounded-xl bg-neutral-800 px-6 py-3 text-white"
                onClick={() => {
                  collectionsDispatch({
                    kind: "add-article",
                    collection: c.id,
                    article: articleId,
                  });
                  onClose();
                }}
              >
                {JSON.stringify(c, null, 2)}
              </button>
            ))}
          </>
        )}
        <button
          type="button"
          className="cursor-pointer rounded-xl bg-white px-6 py-3 font-bold text-neutral-950"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
