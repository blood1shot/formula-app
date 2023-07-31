import { defineStore } from "pinia";
import { Ref, ref, computed, ComputedRef } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const accessToken: Ref<string | null> = ref(null);
    const refreshToken: Ref<string | null> = ref(null);
    const router = useRouter();

    const isLogged: ComputedRef<boolean> = computed(() => {
      return accessToken.value !== null;
    });

    const setTokens = (payload: {
      access_token: string;
      refresh_token: string;
    }): void => {
      accessToken.value = payload.access_token;
      refreshToken.value = payload.refresh_token;
    };

    const clear = (): void => {
      accessToken.value = null;
      refreshToken.value = null;
      router.push({ name: "/" });
    };

    return {
      accessToken,
      refreshToken,
      setTokens,
      clear,
      isLogged
    };
  },
  {
    persist: {
      paths: ["accessToken", "refreshToken"]
    }
  }
);
