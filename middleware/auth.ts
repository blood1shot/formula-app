import { useUserStore } from "@/stores/user";

export default defineNuxtRouteMiddleware((to) => {
  const { isLogged } = useUserStore();
  if (to.path === "/fantasy" && !isLogged) {
    return navigateTo("/login");
  }
});
