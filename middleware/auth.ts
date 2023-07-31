// import { useUserStore } from "@/stores/user";
import authApi from "@/services/authApi";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/fantasy") {
    authApi
      .verifyAccess()
      .then(() => {
        navigateTo("/fantasy");
      });
    return navigateTo("/login");
  }
});
