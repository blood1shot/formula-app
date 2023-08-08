<template lang="pug">
.teams__list-wrapper
  common-app-input.w-full.mb-4(
    v-model.trim="search",
    :placeholder="type === 'drivers' ? 'Search Drivers' : 'Search Constructors'",
    :search="true"
  )
  .teams__list-header.px-4.py-2.bg-white.rounded.mb-2
    .items-center.flex
      .text-xs.teams__list-header_sort SORT BY:
      ul.items-center.flex.justify-around.w-full
        li.items-center.text-xs.mr-4.shrink-0.justify-end.flex.cursor-pointer.teams__list-header_picked(@click="pickedFilter = !pickedFilter")
          p % Picked
          .icon(v-if="pickedFilterDisabled")
            .icon_arrow-down(v-if="pickedFilter")
            .icon_arrow-up(v-else)
        li.items-center.text-xs.mr-4.shrink-0.justify-end.flex.cursor-pointer.teams__list-header_season(@click="seasonFilter = !seasonFilter")
          p Season Pts
          .icon(v-if="seasonFilterDisabled")
            .icon_arrow-down(v-if="seasonFilter")
            .icon_arrow-up(v-else)
        li.items-center.text-xs.mr-28.shrink-0.justify-end.flex.cursor-pointer.teams__list-header_value(@click="valueFilter = !valueFilter")
          p Value
          .icon(v-if="valueFilterDisabled")
            .icon_arrow-down(v-if="valueFilter")
            .icon_arrow-up(v-else)
  .teams__list.bg-white.rounded.overflow-y-auto
    .teams__list-item.flex-row.items-center.flex.mb-2(v-for="(item, index) in sortedList" :key="index")
      img.teams__list-item_avatar.mr-4.rounded(:src="item.imgSource")
      .teams__list-item_content.w-full.flex.flex-row.items-center
        p.teams__list-item_player-name.font-bold.text-xl {{ item.name }}
        ul.teams__list-item_player-stats.flex.w-full.justify-around.items-center
          li.text-sm {{ item.picked }}%
          li.text-sm {{ item.season_points }}
          li.text-sm ${{ item.value }}M
          li
            button.teams__list-item_add-new +
</template>
<script lang="ts" setup>
import { useFantasyStore } from "@/stores/fantasy";

interface IProps {
  type: string;
}
const props = withDefaults(defineProps<IProps>(), {
  type: ""
});

const { playersList, constructorsList } = useFantasyStore();
const search = ref<string>("");
const pickedFilter = ref<boolean>(true);
const pickedFilterDisabled = ref<boolean>(false);
const seasonFilter = ref<boolean>(true);
const seasonFilterDisabled = ref<boolean>(false);
const valueFilter = ref<boolean>(true);
const valueFilterDisabled = ref<boolean>(false);

watch(pickedFilter, () => {
  pickedFilterDisabled.value = true;
  valueFilterDisabled.value = false;
  seasonFilterDisabled.value = false;
});
watch(seasonFilter, () => {
  pickedFilterDisabled.value = false;
  valueFilterDisabled.value = false;
  seasonFilterDisabled.value = true;
});
watch(valueFilter, () => {
  seasonFilterDisabled.value = false;
  pickedFilterDisabled.value = false;
  valueFilterDisabled.value = true;
});

const sortedList = computed<IPlayerInfo[] | IConstructorInfo[]>(() => {
  if (props.type === "drivers") {
    if (search.value.length) {
      return playersList.filter((item: IPlayerInfo) => item.name.toLowerCase().includes(search.value.toLowerCase()));
    }
    if (pickedFilter.value && pickedFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(a.picked) - parseFloat(b.picked));
    }
    if (pickedFilter.value === false && pickedFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(b.picked) - parseFloat(a.picked));
    }
    if (seasonFilter.value && seasonFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(a.season_points) - parseFloat(b.season_points));
    }
    if (seasonFilter.value === false && seasonFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(b.season_points) - parseFloat(a.season_points));
    }
    if (valueFilter.value && valueFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(a.value) - parseFloat(b.value));
    }
    if (valueFilter.value === false && valueFilterDisabled.value) {
      return playersList.sort((a: IPlayerInfo, b: IPlayerInfo) => parseFloat(b.value) - parseFloat(a.value));
    } else {
      return playersList;
    }
  }
  if (props.type === "constructors") {
    if (search.value.length) {
      return constructorsList.filter((item: IConstructorInfo) => item.name.toLowerCase().includes(search.value.toLowerCase()));
    }
    if (pickedFilter.value && pickedFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(a.picked) - parseFloat(b.picked));
    }
    if (pickedFilter.value === false && pickedFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(b.picked) - parseFloat(a.picked));
    }
    if (seasonFilter.value && seasonFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(a.season_points) - parseFloat(b.season_points));
    }
    if (seasonFilter.value === false && seasonFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(b.season_points) - parseFloat(a.season_points));
    }
    if (valueFilter.value && valueFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(a.value) - parseFloat(b.value));
    }
    if (valueFilter.value === false && valueFilterDisabled.value) {
      return constructorsList.sort((a: IConstructorInfo, b: IConstructorInfo) => parseFloat(b.value) - parseFloat(a.value));
    } else {
      return constructorsList;
    }
  }
});
</script>
<style lang="scss" scoped>
.icon {
  display: inline-block;
  margin-left: 5px;
  &_arrow-up {
    @include icon-mask("arrow-long-top", 15px, 15px, $text-color-2);
  }
  &_arrow-down {
    @include icon-mask("arrow-long-bottom", 15px, 15px, $text-color-2);
  }
}
.teams {
  &__list {
    max-height: 316px;
    &-header {
      &_sort {
        min-width: 221px;
        @include media-below-medium {
          min-width: 178px;
        }
      }
    }
    &-item {
      padding: 4px 16px 4px 4px;
      &:last-child {
        margin: 0;
      }
      &_add-new {
        background-color: $primary;
        height: 30px;
        width: 30px;
        border-radius: 4px;
        color: $white;
        display: flex;
        justify-content: center;
        border: 2px solid transparent;
        &:hover {
          background-color: $white;
          color: $primary;
          border: 2px solid $primary;
        }
      }
      &_avatar {
        width: 100px;
        @include media-below-medium {
          width: 80px;
        }
      }
      &_player-name {
        max-width: 105px;
        min-width: 105px;
        line-height: 23px;
        @include media-below-medium {
          font-size: 16px;
          min-width: 84px;
        }
      }
    }
  }
}
</style>
