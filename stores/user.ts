import { defineStore } from "pinia";
import { ref } from "vue";
import type { CreateUserBody } from "@/types/api/CreateUserBody";
import type { IUserInfo } from "@/types/entities/IUserInfo";
import { UserRole } from "@/utils/enum/UserRole";

export const useUserStore = defineStore(
  "user",
  () => {
    const isLogged = ref<boolean>(false);
    const user = ref<IUserInfo | undefined>();
    const usersList = ref<IUserInfo[]>([
      {
        id: 1,
        role: UserRole.admin,
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
        user.value = isUserExist;
        return true;
      } else {
        return false;
      }
    }

    function logout (): void {
      isLogged.value = false;
      user.value = undefined;
    }

    function createUser (payload: CreateUserBody): void {
      usersList.value.push({
        id: Date.now(),
        role: UserRole.user,
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

    return { usersList, isLogged, createUser, login, logout, user };
  }, {
    persist: true
  }
);
