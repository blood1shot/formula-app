import axiosClient from "./api";
import { ApiClientResponse } from "@/types/api/ApiClientResponse";
import { AuthResponseBody } from "@/types/api/AuthResponseBody";
import { CreateUserBody } from "@/types/api/CreateUserBody";
// import { RefreshTokenResponseBody } from "@/types/api/RefreshTokenResponseBody";

export default {
  getUser (payload: CreateUserBody): Promise<ApiClientResponse<AuthResponseBody>> {
    return axiosClient.post("/auth/signup", payload);
  }
};
