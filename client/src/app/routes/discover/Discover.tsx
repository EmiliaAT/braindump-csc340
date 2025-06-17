import { useEffect, useState } from "react";
import type User from "../../../features/users/types/User";
import type Collection from "../../../features/collections/types/Collection";
import type Article from "../../../features/articles/types/Article";
import { getUsers } from "../../../features/users/api/getUsers";
import { getArticles } from "../../../features/articles/api/getArticles";
import { getCollections } from "../../../features/collections/api/getCollections";

export default function Discover() {
  const [users, setUsers] = useState<readonly User[]>();
  const [articles, setArticles] = useState<readonly Article[]>();
  const [collections, setCollections] = useState<readonly Collection[]>();

  useEffect(() => {
    void getUsers()
      .then((users) => users.data)
      .then(setUsers);
    void getArticles()
      .then((articles) => articles.data)
      .then(setArticles);
    void getCollections()
      .then((collections) => collections.data)
      .then(setCollections);
  }, []);

  const displayItems = (items?: readonly { id: number }[]) =>
    !items ? (
      <p>Loading...</p>
    ) : (
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <p key={item.id}>{JSON.stringify(item, null, 2)}</p>
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      <h3 className="text-center text-xl font-bold">Users</h3>
      <h3 className="text-center text-xl font-bold">Articles</h3>
      <h3 className="text-center text-xl font-bold">Collections</h3>
      {displayItems(users)}
      {displayItems(articles)}
      {displayItems(collections)}
    </div>
  );
}
