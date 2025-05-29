import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Discover from "./pages/discover/Discover";
import Layout from "./common/layout/Layout";
import User from "./common/user/User";
import Article from "./common/article/Article";
import Collection from "./common/collection/Collection";
import Collections from "./pages/collections/Collections";

export default function App() {
  const users = [new User("User [A]", [], []), new User("User [B]", [], [])];

  const articles = [new Article("Article [A]", users[0], "Test"), new Article("Article [B]", users[1], "Test"), new Article("Article [C]", users[0], "Test")];

  const collections = [new Collection("Collection [A]", users[0], [articles[0], articles[2]]), new Collection("Collection [B]", users[1], [articles[1]])];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="dashboard" element={<Dashboard user={users[0]} articles={articles} collections={collections} />} />
        <Route path="discover" element={<Discover articles={articles} collections={collections} />} />
        <Route path="collections" element={<Collections user={users[0]} articles={articles} collections={collections} />} />
      </Route>
    </Routes>
  );
}
