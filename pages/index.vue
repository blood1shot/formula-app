<template lang="pug">
div
  h1.text-3xl.text-center.mb-8 Latest F2 News
  hr.w-full.border-4.rounded-sm.border-blue-700.mb-5
  news-list/
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "main-layout"
});
</script>
