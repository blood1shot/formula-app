<template lang="pug">
nuxt-link.listing-card(:to="`news/${newsInfo.id}`")
  .listing-card__image
    img(
      v-if="newsInfo.imgGallery",
      :src="newsInfo.imgSource[0]",
      alt="News Image"
    )
    img(v-else, :src="newsInfo.imgSource", alt="News Image")
  .listing-card__caption.p-5.pb-11
    p.listing-card__caption-type.uppercase.mb-4.text-xs {{ newsInfo.type }}
    p.listing-card__caption-text {{ newsInfo.title }}
</template>
<script lang="ts" setup>
import type { newsInfo } from "../types/entities/newsInfo";

interface IProps {
  newsInfo: newsInfo;
}
withDefaults(defineProps<IProps>(), {
  newsInfo: {
    id: 0,
    imgSource: "",
    imgGallery: false,
    type: "",
    title: "",
    description: "",
    createdAt: "",
    author: "",
    tags: [""]
  }
});
</script>
<style lang="scss" scoped>
.listing-card {
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  max-height: 335px;
  min-height: 335px;
  &:hover {
    img {
      transform: scale(1.1);
    }
    .listing-card__caption {
      color: #ffffff;
      background-color: rgb(29 78 216);
      &-type {
        color: #ffffff;
      }
    }
  }
  &__caption {
    height: 60%;
    background-color: #f3f3f3;
    &-text {
      font-size: 17px;
      font-family: "Titillium Web", sans-serif;
      font-weight: 500;
    }
    &-type {
      color: rgb(29 78 216);
    }
  }
  &__image {
    overflow: hidden;
    height: 40%;
    img {
      object-fit: cover;
      transition: transform 0.3s ease-in-out;
      width: 100%;
      height: 100%;
    }
  }
  &:after {
    z-index: 2;
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 24px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 36px solid #fff;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.uppercase {
  font-family: "Titillium Web", sans-serif;
  font-weight: 400;
}
</style>
