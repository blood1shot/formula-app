/* eslint-disable camelcase */
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
import { useUserStore } from "@/stores/user";
import authApi from "@/services/authApi";

interface Subscriber {
  (token: string): void;
}

const config = useRuntimeConfig();
const router = useRouter();

const baseURL = config.VUE_APP_API_URL
  ? `${config.VUE_APP_API_URL}/api/v1`
  : "";
const axiosClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const userStore = useUserStore();
let subscribers: Subscriber[] = [];
let isRefreshing = false;

function onRefreshed (accessToken: string): void {
  subscribers.forEach(cb => cb(accessToken));
}

function subscribeTokenRefresh (cb: Subscriber): void {
  subscribers.push(cb);
}

axiosClient.interceptors.request.use(
  (request) => {
    if (request.headers && userStore.accessToken) {
      request.headers.Authorization = `Bearer ${userStore.accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    const refreshToken: string = userStore.refreshToken;
    if (error.response.status === 401) {
      if (refreshToken) {
        if (!isRefreshing) {
          isRefreshing = true;
          authApi
            .refreshToken({
              refresh_token: refreshToken
            })
            .then((res) => {
              const { access_token, refresh_token } = res.data.data;
              userStore.setTokens({ access_token, refresh_token });
              isRefreshing = false;
              onRefreshed(access_token);
              subscribers = [];
            })
            .catch(() => {
              userStore.clear();
              router.push({ name: "login" });
            });
        }
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosClient(originalRequest));
          });
        });
      } else {
        userStore.clear();
        router.push({ name: "login" });
      }
    } else if (error.response.status !== 404) {
      createToast(error?.response?.data?.message, {
        type: "danger"
      });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
