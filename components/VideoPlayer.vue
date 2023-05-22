<template lang="pug">
video-player#video-player(
  :src="videoInfo.src",
  :poster="videoInfo.poster",
  controls="",
  :volume="0.6"
)
</template>
<script lang="ts" setup>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

interface IProps {
  videoInfo: {
    src: string;
    poster: string;
  };
}
withDefaults(defineProps<IProps>(), {
  videoInfo: () => ({
    src: "",
    poster: ""
  })
});
</script>
<style lang="scss" scoped>
#video-player {
  width: 100%;
  max-height: 385px;
}
</style>
