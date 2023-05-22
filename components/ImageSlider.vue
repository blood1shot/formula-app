<template lang="pug">
#controls-carousel.relative.w-full(data-carousel="static")
  .relative.h-56.overflow-hidden(class="md:h-96")
    .hidden.duration-700.ease-in-out(
      v-for="imgSource in images",
      :key="imgSource",
      data-carousel-item=""
    )
      img.absolute.block.w-full(:src="imgSource", alt="...")
  button.absolute.top-0.left-0.z-30.flex.items-center.justify-center.h-full.px-4.cursor-pointer.group(
    type="button",
    class="focus:outline-none",
    data-carousel-prev=""
  )
    span.inline-flex.items-center.justify-center.w-10.h-10.rounded-full(
      class="bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    )
      svg.w-6.h-6.text-white(
        aria-hidden="true",
        class="dark:text-gray-800",
        fill="none",
        stroke="currentColor",
        viewBox="0 0 24 24",
        xmlns="http://www.w3.org/2000/svg"
      )
        path(
          stroke-linecap="round",
          stroke-linejoin="round",
          stroke-width="2",
          d="M15 19l-7-7 7-7"
        )
      span.sr-only Previous
  button.absolute.top-0.right-0.z-30.flex.items-center.justify-center.h-full.px-4.cursor-pointer.group(
    type="button",
    class="focus:outline-none",
    data-carousel-next=""
  )
    span.inline-flex.items-center.justify-center.w-10.h-10.rounded-full(
      class="bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
    )
      svg.w-6.h-6.text-white(
        aria-hidden="true",
        class="dark:text-gray-800",
        fill="none",
        stroke="currentColor",
        viewBox="0 0 24 24",
        xmlns="http://www.w3.org/2000/svg"
      )
        path(
          stroke-linecap="round",
          stroke-linejoin="round",
          stroke-width="2",
          d="M9 5l7 7-7 7"
        )
      span.sr-only Next
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

interface IProps {
  images: string[];
}
withDefaults(defineProps<IProps>(), {
  images: () => [""]
});

onMounted(() => {
  initFlowbite();
});
</script>
