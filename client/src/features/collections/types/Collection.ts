import type Article from "../../articles/types/Article";
import type User from "../../users/types/User";

export default interface Collection {
  id: number;
  title: string;
  isPublic: boolean;
  author: User["id"];
  articles: readonly Article["id"][];
}
