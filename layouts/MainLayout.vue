<template lang="pug">
.home-wrapper
  the-header
  .main-content__wrapper
    .main-content
      slot
  the-footer
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.main-content {
  width: 100%;
  padding: 40px 40px 60px 40px;
  &__wrapper {
    display: flex;
  }
}
</style>
