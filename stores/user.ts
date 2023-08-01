import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const accessToken: Ref<string | null> = ref(null);
    const refreshToken: Ref<string | null> = ref(null);
    const router = useRouter();

    const setTokens = (payload: {
      access_token: string;
      refresh_token: string;
    }): void => {
      accessToken.value = payload.access_token;
      refreshToken.value = payload.refresh_token;
      console.log(refreshToken.value);
    };

    const clear = (): void => {
      accessToken.value = null;
      refreshToken.value = null;
      router.push({ path: "/" });
    };

    return {
      accessToken,
      refreshToken,
      setTokens,
      clear
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
      paths: ["accessToken", "refreshToken"]
    }
  }
);
