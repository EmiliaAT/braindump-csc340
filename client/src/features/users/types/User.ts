export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  homepage?: number;
  createdAt: string;
  updatedAt: string;
}

export type Users = readonly User[];
