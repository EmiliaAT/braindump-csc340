import type Article from "../../articles/types/Article";
import type Collection from "../../collections/types/Collection";

export default interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  articles: readonly Article["id"][];
  collections: readonly Collection["id"][];
  subscribers: readonly User["id"][];
  subscriptions: readonly User["id"][];
}
