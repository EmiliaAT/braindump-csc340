import axios from "axios";
import type Collection from "../types/Collection";

export const deleteCollection = (id: Collection["id"]) =>
  axios.delete(`/api/collections/${String(id)}`).then(() => id);
