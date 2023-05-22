<template lang="pug">
.calendar__wrapper
  calendar.custom-calendar(
    expanded,
    :attributes="attributes",
    locale="en-EN",
    :first-day-of-week="2",
    :masks="{ weekdays: 'WWW' }"
  )
    template(#day-content="{ day, attributes }")
      .flex.flex-col.h-full.z-5.overflow-hidden
        span.day-label.text-sm.text-gray-900 {{ day.day }}
        .flex-grow.overflow-y-auto.overflow-x-auto
          common-app-popover(
            v-for="attr in attributes",
            :key="attr.key",
            :content="attr.customData.popoverContent"
          )
            .day__text-wrapper.box-border.rounded-sm.p-1.mt-0.mb-1(
              :class="attr.customData.class"
            )
              p.day__text.text-xs.leading-tight
                | {{ attr.customData.title }}
              span.day__time {{ attr.customData.time }}
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { Calendar } from "v-calendar";
import { useRacesStore } from "../../stores/races";
import "v-calendar/style.css";

const { racesList } = useRacesStore();

const attributes = computed(() => [
  ...racesList.map(race => ({
    dates: new Date(race.date),
    customData: {
      title: race.title,
      // class: race.isOutdated ? "opacity-75 bg-blue-700 text-white" : "bg-blue-700 text-white",
      class: "bg-blue-700 text-white",
      popoverContent: {
        title: race.title,
        time: race.time,
        text: race.description.text
      },
      time: race.time.slice(0, 5)
    }
  }))
]);
</script>
<style lang="scss" scoped>
.day {
  &__text {
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
      min-width: 100%;
    }
  }
  &__time {
    font-size: 10px;
  }
}
:deep(.popper__wrapper) {
  max-width: 100%;
  min-width: 100%;
}
:deep(.vc-day) {
  z-index: auto;
}
.calendar__wrapper {
  :deep(.vc-weekday-1) {
    color: #ff4242;
  }
  :deep(.vc-weekday-7) {
    color: #ff4242;
  }
  :deep(.vc-title) {
    z-index: 1;
  }
  :deep(.vc-header) {
    height: auto;
    margin-top: 0;
  }
  :deep(.vc-weekdays) {
    border-bottom: 1px solid #cbd5e1;
  }
  :deep(.vc-day) {
    min-height: 70px;
    .vc-day-content {
      cursor: auto;
      &:hover {
        background-color: transparent;
      }
      &:focus {
        border: none;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
:deep(.custom-calendar.vc-container) {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  .vc-weeks {
    padding: 0;
  }
  .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    .weekday-1,
    .weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      .weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
