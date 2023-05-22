<template lang="pug">
Popper(placement="right" class="popper__wrapper")
  slot
  template(#content)
    div
      p.mb-1 {{ content.title }}
      p.mb-3.text-xs {{ content.time }}
      p {{ content.text }}
</template>
<script lang="ts" setup>
import Popper from "vue3-popper";

interface IProps {
  content: {
    title: string;
    time: string;
    text: string;
  }
}
withDefaults(defineProps<IProps>(), {
  content: () => ({
    title: "",
    time: "",
    text: ""
  })
});
</script>
<style lang="scss">
:root {
  --popper-theme-background-color: rgba(255, 255, 255, 0.5);
  --popper-theme-background-color-hover: rgba(255, 255, 255, 0.5);
  --popper-theme-text-color: #000;
  --popper-theme-border-width: 1px;
  --popper-theme-border-color: #cbd5e1;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 15px;
  --popper-theme-box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.25);
}
.popper {
  min-width: 350px;
  backdrop-filter: saturate(180%) blur(20px);
  &__wrapper {
    margin: 0 !important;
    border: none !important;
  }
}
</style>
