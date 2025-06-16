import type Collection from "../../collections/types/Collection";
import type User from "../../users/types/User";

export default interface Article {
  id: number;
  title: string;
  content: string;
  isPublic: boolean;
  author: User["id"];
  collections: readonly Collection["id"][];
}
