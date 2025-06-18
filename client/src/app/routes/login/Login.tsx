import { useState, type FormEvent } from "react";
import useUsers from "../../../features/users/hooks/useUsers";
import useAuth from "../../../features/auth/hooks/useAuth";
import { Link, useNavigate } from "react-router";
import Header from "../../../components/header/Header";

export default function Login() {
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [, dispatch] = useAuth()!;

  const [users] = useUsers();

  const navigate = useNavigate();

  if (users.isLoading) {
    return <p>Loading...</p>;
  }
  if (!users.data) {
    return <p>An Error Occurred!</p>;
  }

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      username: { value: string };
      password: { value: string };
    };

    const validUser = users.data.find((user) => user.username == username);

    if (username == "") {
      alert("The username cannot be empty.");
      return;
    }
    if (password == "") {
      alert("The password cannot be empty.");
      return;
    }
    if (validUser === undefined) {
      alert(`No user with username '${username}' was found.`);
      return;
    }
    if (validUser.password != password) {
      alert("The password is incorrect.");
      return;
    }

    dispatch({
      kind: "login",
      username,
      password,
      onSuccess: () => void navigate("/"),
      onFailure: () => {
        alert("An error occurred!");
      },
    });
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
      confirm: { value: confirm },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      username: { value: string };
      password: { value: string };
      confirm: { value: string };
    };

    if (username == "") {
      alert("The username cannot be empty.");
      return;
    }
    if (password == "") {
      alert("The password cannot be empty.");
      return;
    }
    if (password != confirm) {
      alert("The passwords do not match!");
      return;
    }
    if (users.data.map((user) => user.username).includes(username)) {
      alert("The username already exists!");
      return;
    }

    dispatch({
      kind: "create",
      username,
      password,
      onSuccess: () => void navigate("/"),
      onFailure: () => {
        alert("An error occurred!");
      },
    });
  };

  return (
    <div className="min-h-screen min-w-screen bg-neutral-950">
      <Header>
        <Link className="cursor-pointer text-white underline" to="/discover">
          Discover
        </Link>
      </Header>
      <div className="flex flex-col gap-8 px-16 py-8">
        {/* <button type="button" className="text-white" onClick={handleToggle}> */}
        {/*   {mode == "sign-in" ? "Switch to Sign Up" : "Switch to Sign In"} */}
        {/* </button> */}
        {mode == "sign-in" ? (
          <form
            key="sign-in"
            className="flex flex-col gap-4 w-1/3 mx-auto"
            onSubmit={handleSignIn}
          >
            <h2 className="text-white font-extrabold text-3xl mx-auto">
              Sign In
            </h2>
            <input
              id="username"
              type="text"
              className="px-6 py-3 text-white"
              placeholder="Username:"
            />
            <input
              id="password"
              type="password"
              className="px-6 py-3 text-white"
              placeholder="Password:"
            />
            <div className="flex flex-row gap-4">
              <button
                type="submit"
                className="rounded-xl bg-white w-1/2 px-6 py-3 font-bold cursor-pointer text-neutral-950"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-white w-1/2 cursor-pointer font-bold"
                onClick={() => {
                  setMode("sign-up");
                }}
              >
                ...or Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form
            key="sign-up"
            className="flex flex-col gap-4 w-1/3 mx-auto"
            onSubmit={handleSignUp}
          >
            <h2 className="text-white font-extrabold text-3xl mx-auto">
              Sign Up
            </h2>
            <input
              id="username"
              type="text"
              className="px-6 py-3 text-white"
              placeholder="New Username:"
            />
            <input
              id="password"
              type="password"
              className="px-6 py-3 text-white"
              placeholder="New Password:"
            />
            <input
              id="confirm"
              type="password"
              className="px-6 py-3 text-white"
              placeholder="Confirm Password:"
            />
            <div className="flex flex-row gap-4">
              <button
                type="submit"
                className="rounded-xl bg-white w-1/2 px-6 py-3 font-bold cursor-pointer text-neutral-950"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-white w-1/2 cursor-pointer font-bold"
                onClick={() => {
                  setMode("sign-in");
                }}
              >
                ...or Sign In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
