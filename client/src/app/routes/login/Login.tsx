import { useState, type FormEvent } from "react";
import useUsers from "../../../features/users/hooks/useUsers";
import useAuth from "../../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router";

export default function Login() {
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");

  const [, dispatch] = useAuth();

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

  const handleToggle = () => {
    setMode(mode == "sign-in" ? "sign-up" : "sign-in");
  };

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        {mode == "sign-in" ? "Switch to Sign Up" : "Switch to Sign In"}
      </button>
      {mode == "sign-in" ? (
        <form key="sign-in" onSubmit={handleSignIn}>
          <input id="username" type="text" placeholder="Username:" />
          <input id="password" type="password" placeholder="Password:" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form key="sign-up" onSubmit={handleSignUp}>
          <input id="username" type="text" placeholder="New Username:" />
          <input id="password" type="password" placeholder="New Password:" />
          <input id="confirm" type="password" placeholder="Confirm Password:" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
