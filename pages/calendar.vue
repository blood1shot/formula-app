<template lang="pug">
.calendar__wrapper
  h1(class="text-3xl text-center font-semibold mb-8") Calendar
  common-app-calendar/
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "main-layout"
});
</script>
