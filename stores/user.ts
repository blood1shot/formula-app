import { defineStore } from "pinia";
import { ref } from "vue";
import type { userInfo } from "../types/entities/userInfo";
import type { createUserBody } from "../types/api/createUserBody";

export const useUserStore = defineStore(
  "user",
  () => {
    const isLogged = ref<boolean>(false);
    const loggedUser = ref<userInfo>();
    const usersList = ref<userInfo[]>([
      {
        id: 1,
        role: "admin",
        createdAt: Date.now(),
        firstname: "admin",
        lastname: "admin",
        credentials: {
          password: "12345678",
          email: "admin@gmail.com"
        },
        scopes: ["news"]
      }
    ]);

    function login (payload: {
      password: string;
      email: string;
    }): boolean {
      const isUserExist = usersList.value.find(item => item.credentials.password === payload.password && item.credentials.email === payload.email);
      if (isUserExist) {
        isLogged.value = true;
        loggedUser.value = isUserExist;
        return true;
      } else {
        return false;
      }
    }

    function logout (): void {
      isLogged.value = false;
      loggedUser.value = undefined;
    }

    function createUser (payload: createUserBody): void {
      usersList.value.push({
        id: Date.now(),
        role: "user",
        createdAt: Date.now(),
        firstname: payload.firstname,
        lastname: payload.lastname,
        credentials: {
          password: payload.password,
          email: payload.email
        },
        scopes: [""]
      });
    }

    return { usersList, isLogged, createUser, login, logout, loggedUser };
  }, {
    persist: true
  }
);
