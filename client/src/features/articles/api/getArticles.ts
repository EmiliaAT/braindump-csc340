import axios from "axios";
import type Article from "../types/Article";

export const getArticles = () => axios.get<readonly Article[]>("/api/articles");
