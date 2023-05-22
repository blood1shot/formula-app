<template lang="pug">
header.header(class="dark:border-none")
  nav.bg-white.border-gray-200.px-4(class="lg:px-6 py-2.5 dark:bg-gray-800")
    .flex.flex-wrap.justify-between.items-center.mx-auto.max-w-screen-xl
      nuxt-link.flex.items-center(to="/")
        img.mr-3.h-6(src="@/assets/images/f1&f2.png", class="sm:h-11", alt="F2 Logo")
        span.self-center.text-xl.font-semibold.whitespace-nowrap(
          class="dark:text-white"
        ) Formula News
      .flex.items-center(class="lg:order-2")
        .text-sm.px-4.py-2.text-blue-700.font-medium.rounded-lg.username(
          v-if="userStore.isLogged"
        )
          p {{ userStore.loggedUser.firstname }} {{ userStore.loggedUser.lastname }}
        button.text-white.bg-blue-700.font-medium.rounded-lg.text-sm.px-4.py-2.ml-2(
          v-if="userStore.isLogged",
          class="hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          @click="userLogout"
        ) Logout
        nuxt-link.text-white.bg-blue-700.font-medium.rounded-lg.text-sm.px-4.py-2(
          v-else,
          class="hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
          href="/login"
        ) Log in
        button.inline-flex.items-center.p-2.ml-1.text-sm.text-gray-500.rounded-lg(
          data-collapse-toggle="mobile-menu-2",
          type="button",
          class="lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          aria-controls="mobile-menu-2",
          aria-expanded="false"
        )
          span.sr-only Open main menu
          svg.w-6.h-6(
            fill="currentColor",
            viewBox="0 0 20 20",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              fill-rule="evenodd",
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
              clip-rule="evenodd"
            )
          svg.hidden.w-6.h-6(
            fill="currentColor",
            viewBox="0 0 20 20",
            xmlns="http://www.w3.org/2000/svg"
          )
            path(
              fill-rule="evenodd",
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
              clip-rule="evenodd"
            )
      #mobile-menu-2.hidden.justify-between.items-center.w-full(
        class="lg:flex lg:w-auto lg:order-1"
      )
        ul.flex.flex-col.mt-4.font-medium(class="lg:flex-row lg:space-x-8 lg:mt-0")
          li
            nuxt-link.block.py-2.pr-4.pl-3.text-gray-700.border-b.border-gray-100(
              to="/",
              class="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
              aria-current="page"
            ) Home
          li
            nuxt-link.block.py-2.pr-4.pl-3.text-gray-700.border-b.border-gray-100(
              to="/calendar",
              class="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            ) Calendar
          li
            nuxt-link.block.py-2.pr-4.pl-3.text-gray-700.border-b.border-gray-100(
              to="/fantasy",
              class="hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            ) Fantasy League
</template>
<script lang="ts" setup>
import { createToast } from "mosha-vue-toastify";
import { useUserStore } from "../stores/user";

const router = useRouter();
const userStore = useUserStore();

const userLogout = () => {
  userStore.logout();
  router.push({ path: "/" });
  createToast("Logged out succesfully", { type: "success" });
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #d6d6d6;
}
.router-link-exact-active {
  color: $primary;
}
.username {
  border: 1px solid $primary;
}
</style>
