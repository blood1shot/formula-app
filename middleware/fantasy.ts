export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/fantasy") {
    return navigateTo("/fantasy/how-to-play");
  }
});
