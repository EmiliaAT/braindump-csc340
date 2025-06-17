import axios from "axios";
import type User from "../types/User";

export const getUsers = async () => axios.get<readonly User[]>("/api/users");
