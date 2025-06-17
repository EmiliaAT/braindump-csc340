import axios from "axios";
import type Collection from "../types/Collection";

export const getCollections = () =>
  axios.get<readonly Collection[]>("/api/collections");
