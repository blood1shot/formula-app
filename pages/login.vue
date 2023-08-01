<template lang="pug">
.login-form__wrapper.h-screen.pt-16(class="w-1/3")
  form.login-form__content.rounded-xl.p-5.bg-white(@submit.prevent="loginUser")
    p.text-sm <nuxt-link href="/" class="underline text-blue-700">← Go back to home</nuxt-link>
    h1.text-3xl.text-center.mb-5 Sign in
    common-app-input.mb-5(
      v-model="form.email",
      placeholder="Email",
      :error-message="v$.email.$errors[0]?.$message"
    )
    common-app-input.mb-6(
      v-model="form.password",
      placeholder="Password",
      type="password",
      :error-message="v$.password.$errors[0]?.$message",
      :eye="true"
    )
    button.text-white.bg-blue-700.font-medium.rounded-lg.text-sm.px-4.py-2.mr-2.w-full(
      class="hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type="submit"
      :disabled="loading"
    )
      .inline-block.h-8.w-8.animate-spin.rounded-full.border-4.border-solid.border-current.border-r-transparent(v-if="loading" class="align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status")
        span(class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]") Loading...
      p(v-else) Log in
    p.mt-3.text-sm.text-slate-400.text-center Don't have an account? <nuxt-link href="/create-user" class="underline text-blue-700">Sign Up Now</nuxt-link>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  maxLength
} from "@vuelidate/validators";
import { createToast } from "mosha-vue-toastify";
import { useUserStore } from "@/stores/user";
import type { LoginBody } from "@/types/api/LoginBody";
import "mosha-vue-toastify/dist/style.css";
import authApi from "@/services/authApi";

const userStore = useUserStore();

const router = useRouter();

const form: LoginBody = reactive({
  email: "",
  password: ""
});

const rules = computed(() => ({
  email: {
    required: helpers.withMessage("This field cannot be empty", required),
    email: helpers.withMessage("This field should be an email", email),
    maxLength: helpers.withMessage(
      "The email must not be greater than 30 characters.",
      maxLength(30)
    )
  },
  password: {
    required: helpers.withMessage("This field cannot be empty", required),
    maxLength: helpers.withMessage(
      "The password must not be greater than 20 characters.",
      maxLength(20)
    )
  }
}));

const v$ = useVuelidate(rules, form);

const loading: Ref<boolean> = ref(false);
const loginUser = () => {
  if (loading.value) {
    return;
  }
  v$.value.$validate();
  if (!v$.value.$invalid) {
    loading.value = true;
    authApi
      .login({ ...form })
      .then((res) => {
        // eslint-disable-next-line camelcase
        const { access_token, refresh_token } = res.data;
        // eslint-disable-next-line camelcase
        userStore.setTokens({ access_token, refresh_token });
        router.push({ path: "/" });
        createToast("Logged in succesfully", { type: "success" });
      })
      .finally(() => {
        loading.value = false;
      });
  }
};

definePageMeta({
  layout: "empty-layout"
});
</script>
<style lang="scss" scoped>
.login-form {
  &__wrapper {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
