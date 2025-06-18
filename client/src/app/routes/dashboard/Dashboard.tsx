import { useNavigate, Link } from "react-router";
import useArticles from "../../../features/articles/hooks/useArticles";
import useAuth from "../../../features/auth/hooks/useAuth";
import useCollections from "../../../features/collections/hooks/useCollections";
import useUsers from "../../../features/users/hooks/useUsers";

export default function Dashboard() {
  const [users] = useUsers();
  const [articles] = useArticles();
  const [collections] = useCollections();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen min-w-screen dark:bg-neutral-950">
      <div className="flex w-full flex-row items-center justify-between gap-8 px-8 py-4">
        <button type="button" className="cursor-pointer text-2xl text-white">
          Brain
          <span className="ml-1 rounded-xl bg-rose-600 px-2 py-2 font-extrabold">
            Dump
          </span>
        </button>
        <div className="flex flex-row items-center gap-8">
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
        </div>
      </div>
      <div className="p-8"></div>
    </div>
  );
}
