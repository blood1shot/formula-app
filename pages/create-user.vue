<template lang="pug">
.login-form__wrapper.h-screen.pt-16(class="w-1/3")
  .login-form__content.rounded-xl.p-5.bg-white
    h1.text-3xl.text-center.mb-5 Sign Up
    common-app-input.mb-5(
      v-model="form.firstname",
      placeholder="Firstname",
      :error-message="v$.firstname.$errors[0]?.$message"
    )
    common-app-input.mb-5(
      v-model="form.lastname",
      placeholder="Lastname",
      :error-message="v$.lastname.$errors[0]?.$message"
    )
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
      class="hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 lg:px-5 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      @click="createNewUser"
    ) Create
    p.mt-3.text-sm.text-slate-400.text-center Already have an account? <nuxt-link href="/login" class="underline text-blue-700">Sign In Now</nuxt-link>
</template>
<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, maxLength } from "@vuelidate/validators";
import { createToast } from "mosha-vue-toastify";
import { useUserStore } from "@/stores/user";
import type { CreateUserBody } from "@/types/api/CreateUserBody";
import "mosha-vue-toastify/dist/style.css";

const { createUser } = useUserStore();
const router = useRouter();

const form: CreateUserBody = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: ""
});

const rules = computed(() => ({
  firstname: {
    required: helpers.withMessage("This field cannot be empty", required),
    maxLength: helpers.withMessage(
      "The email must not be greater than 15 characters.",
      maxLength(15)
    )
  },
  lastname: {
    required: helpers.withMessage("This field cannot be empty", required),
    maxLength: helpers.withMessage(
      "The email must not be greater than 15 characters.",
      maxLength(15)
    )
  },
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
const createNewUser = () => {
  v$.value.$validate();
  if (!v$.value.$invalid) {
    createUser(form);
    router.push({ path: "/login" });
    createToast("Succesfully created", { type: "success" });
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
