import { Link, Navigate, useNavigate } from "react-router";
import Header from "../../../components/header/Header";
import useArticles from "../../../features/articles/hooks/useArticles";
import useAuth from "../../../features/auth/hooks/useAuth";
import useUsers from "../../../features/users/hooks/useUsers";

export default function Create() {
  const [users, usersDispatch] = useUsers();
  const [articles] = useArticles();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId, authDispatch] = useAuth()!;

  const navigate = useNavigate();

  if (articles.isLoading || users.isLoading) {
    return <p>Loading...</p>;
  }
  if (!articles.data || !users.data) {
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

  return (
    <div className="min-h-screen min-w-screen bg-neutral-950">
      <Header>
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
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4">
            <h2 className="py-3 text-2xl font-extrabold text-white">
              {article.title}
            </h2>
            <h2 className="py-3 text-2xl font-extrabold text-neutral-700">
              - by {author.username}
            </h2>
          </div>
          {user !== undefined &&
            user.id != author.id &&
            (subscriptions.map((sub) => sub.id).includes(author.id) ? (
              <h2 className="rounded-xl bg-white px-6 py-3 text-xl text-neutral-950">
                Subscribed!
              </h2>
            ) : (
              <button
                type="button"
                className="rounded-xl bg-white px-6 py-3 text-xl text-neutral-950 cursor-pointer"
                onClick={() => {
                  usersDispatch({
                    kind: "add-subscription",
                    subscriber: user.id,
                    subscribee: author.id,
                  });
                }}
              >
                Subscribe
              </button>
            ))}
        </div>
        <div className="border-b-1 border-b-white" />
        <p className="border-l-2 border-l-neutral-800 my-3 pl-4 text-xl text-white">
          {article.content}
        </p>
        <div className="border-b-1 border-b-white" />
      </div>
    </div>
  );
}
