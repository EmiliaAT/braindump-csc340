import { useEffect, useState } from "react";
import "./App.css";
import getUsers from "../features/users/api/getUsers";

export default function App() {
  const [state, setState] = useState<string | undefined>(undefined);

  useEffect(() => {
    void getUsers({ kind: "all" }).then((users) => {
      setState(JSON.stringify(users));
    });
  }, []);

  return state === undefined ? <p>Loading...</p> : <p>{state}</p>;
}
