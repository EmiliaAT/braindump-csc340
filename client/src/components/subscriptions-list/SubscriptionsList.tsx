import { Navigate } from "react-router";
import useAuth from "../../features/auth/hooks/useAuth";
import useUsers from "../../features/users/hooks/useUsers";

export interface SubscriptionsListProps {
  onClose: () => void;
}

export default function SubscriptionsList({ onClose }: SubscriptionsListProps) {
  const [users, usersDispatch] = useUsers();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [userId] = useAuth()!;

  if (users.isLoading) {
    return <p>Loading...</p>;
  }
  if (!users.data) {
    return <p>An Error Occurred!</p>;
  }

  const user =
    userId === undefined
      ? undefined
      : users.data.find((user) => user.id == userId);

  if (user === undefined) {
    return <Navigate to="/" replace />;
  }

  console.log(user.subscriptions);

  const subscriptions = users.data.filter((_user) => {
    return user.subscriptions.includes(_user.id);
  });

  console.log("END: ", subscriptions);

  return (
    <div className="z-10 fixed w-screen h-screen bg-[#17171780] flex">
      <div className="flex flex-col gap-4 m-auto w-1/3 p-8 bg-neutral-950 rounded-xl">
        {subscriptions.length == 0 ? (
          <h2 className="font-extrabold text-2xl text-center w-full text-white">
            You have no Subscriptions!
          </h2>
        ) : (
          <>
            {subscriptions.map((sub) => (
              <button
                type="button"
                key={sub.id}
                className="cursor-pointer rounded-xl bg-neutral-800 px-6 py-3 text-white"
                onClick={() => {
                  usersDispatch({
                    kind: "remove-subscription",
                    subscriber: user.id,
                    subscribee: sub.id,
                  });
                  onClose();
                }}
              >
                {JSON.stringify(sub, null, 2)}
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
