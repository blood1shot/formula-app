<template lang="pug">
.fantasy__wrapper
  .fantasy__header.bg-blue-700.h-32.rounded-t-lg.flex.justify-center.items-center
    img.h-28(
      src="@/assets/icons/f1-fantasy-white-logo.svg",
      alt="f1-fantasy-white-logo"
    )
  .fantasy__tabs-wrapper.flex.rounded-b-lg.w-full.justify-between.items-center
    .fantasy__tabs.flex
      nuxt-link.fantasy__tabs-item.py-4.px-6.cursor-pointer(
        href="/fantasy/how-to-play"
      )
        p How to play
      nuxt-link.fantasy__tabs-item.py-4.px-6.cursor-pointer(
        href="/fantasy/my-team"
      )
        p My Team
    button.fantasy__tabs-create-team.text-sm.px-4.py-2.text-blue-700.font-medium.rounded-lg.mr-3.h-10(v-if="route.name === 'fantasy-my-team'" class="hover:text-white active:bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300") + Create new team
  .fantasy__content.mt-5
    nuxt-page/
</template>
<script lang="ts" setup>
const route = useRoute();

definePageMeta({
  layout: "main-layout",
  middleware: ["auth", "fantasy"]
});
</script>
<style lang="scss" scoped>
.router-link-exact-active {
  color: $primary;
  border-bottom: 3px solid $primary;
}

.fantasy {
  &__tabs {
    &-wrapper {
      border: 1px solid $border-color;
    }
    &-item {
      &:first-child {
        border-bottom-left-radius: 8px;
      }
    }
    &-create-team {
      border: 1px solid $primary;
    }
  }
}
</style>
