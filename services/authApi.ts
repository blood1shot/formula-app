import axiosClient from "./api";
import { ApiClientResponse } from "@/types/api/ApiClientResponse";
import { AuthResponseBody } from "@/types/api/AuthResponseBody";
import { LoginBody } from "@/types/api/LoginBody";
import { CreateUserBody } from "@/types/api/CreateUserBody";
// import { RefreshTokenResponseBody } from "@/types/api/RefreshTokenResponseBody";

export default {
  createUser (payload: CreateUserBody): Promise<ApiClientResponse<AuthResponseBody>> {
    return axiosClient.post("/auth/signup", payload);
  },
  login (payload: LoginBody): Promise<ApiClientResponse<AuthResponseBody>> {
    return axiosClient.post("/auth/signin", payload);
  },
  refreshToken (payload: {
    refresh_token: string;
  }): Promise<ApiClientResponse<AuthResponseBody>> {
    return axiosClient.post("/auth/refresh", payload);
  },
  logout (): Promise<ApiClientResponse<{ message: string }>> {
    return axiosClient.post("/auth/logout");
  },
  verifyAccess (payload: {
    access_token: string;
  }): Promise<ApiClientResponse<{ message: string }>> {
    return axiosClient.post("/auth/verify-access", payload);
  }
};
