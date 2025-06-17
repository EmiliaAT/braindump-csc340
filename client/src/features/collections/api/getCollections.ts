import axios from "axios";
import type Collection from "../types/Collection";

export const getCollections = async () =>
  axios.get<readonly Collection[]>("/api/collections");
