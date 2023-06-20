export interface IUserInfo {
  id: number;
  role: string;
  createdAt: number;
  firstname: string;
  lastname: string;
  credentials: {
    password: string;
    email: string;
  },
  scopes: string[];
}
