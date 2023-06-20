<template lang="pug">
.team__wrapper
  .team__current-circuit-wrapper.flex.bg-slate-200.p-4.rounded-lg.justify-between.mb-6
    .team__current-circuit
      .team__current-circuit-title.flex.items-center.mb-3
        img.team__current-circuit-flag.w-20.mr-4(src="https://fantasy.formula1.com/static-assets/build/images/flags/Monaco.svg?v=1.11" alt="Monaco flag")
        p.uppercase.font-bold.text-3xl.tracking-wide Monaco
      .team__current-circuit-name
        p FORMULA 1 GRAND PRIX DE MONACO 2023
    button.cursor-pointer.team__current-circuit-map.p-1.w-24
      img(src="https://fantasy.formula1.com/static-assets/build/images/circuits/Monaco.svg?v=1.11" alt="Monaco circuit")
  .team__content-wrapper.flex.gap-6
    .team__content-structure(class="w-1/2")
      p Team Structure
    .team__content-lists.bg-slate-200.rounded-lg(class="w-1/2")
      .team__content-lists_types.flex.mb-5
        .team__content-lists_type.border-r.border-black.border-solid.flex(class="w-1/2")
          button.p-3.team__content-lists_type-button.mx-auto.text-xl(:class="[{ 'team__content-lists_type-button-active': openedTabName === 'driversTab' }, 'w-3/4']" @click="openedTabName = 'driversTab'") Drivers
        .team__content-lists_type.flex(class="w-1/2")
          button.p-3.team__content-lists_type-button.mx-auto.text-xl(:class="[{ 'team__content-lists_type-button-active': openedTabName === 'constructorsTab' }, 'w-3/4']" @click="openedTabName = 'constructorsTab'") Constructors
      fantasy-tab(v-if="openedTabName === 'driversTab'" type="drivers")
      fantasy-tab(v-else type="constructors")
</template>
<script lang="ts" setup>
const openedTabName = ref<string>("driversTab");
</script>
<style lang="scss" scoped>
.team {
  &__current-circuit {
    &-flag {
      border: 1px solid $border-color;
    }
    &-name {
      color: hsl(240, 8%, 19%);
    }
    &-map {
      background: url(https://fantasy.formula1.com/static-assets/build/images/patterns/pattern-cross-dark.svg?v=0.13) repeat top left $white;
    }
  }
  &__content {
    &-lists {
      padding: 10px 16px 16px 16px;
      &_type-button {
        font-family: Titillium Web, sans-serif;
        color: #8A8A8E;
        font-weight: bold;
        border-bottom: 4px solid transparent;
        &-active {
          color: black;
          border-bottom: 4px solid $primary;
        }
      }
    }
  }
}
// .teams {
//   &__list {
//     max-height: 316px;
//     &-header {
//       &_sort {
//         min-width: 221px;
//         @include media-below-medium {
//           min-width: 178px;
//         }
//       }
//     }
//     &-item {
//       padding: 4px 16px 4px 4px;
//       &:last-child {
//         margin: 0;
//       }
//       &_add-new {
//         background-color: $primary;
//         height: 30px;
//         width: 30px;
//         border-radius: 4px;
//         color: $white;
//         display: flex;
//         justify-content: center;
//         border: 2px solid transparent;
//         &:hover {
//           background-color: $white;
//           color: $primary;
//           border: 2px solid $primary;
//         }
//       }
//       &_avatar {
//         width: 100px;
//         @include media-below-medium {
//           width: 80px;
//         }
//       }
//       &_player-name {
//         max-width: 105px;
//         min-width: 105px;
//         line-height: 23px;
//         @include media-below-medium {
//           font-size: 16px;
//           min-width: 84px;
//         }
//       }
//     }
//   }
// }
</style>
