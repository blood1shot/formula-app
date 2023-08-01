import authApi from "@/services/authApi";

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/fantasy") {
    authApi
      .verifyAccess()
      .then(() => {
        navigateTo("/fantasy/how-to-play");
      })
      .catch(() => {
        return navigateTo("/login");
      });
  }
});
