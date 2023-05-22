<template lang="pug">
.outer-div(:class="{ 'outer-div_search': search }")
  fieldset.field-wrapper
    .icon.icon_search(v-if="search")
    legend.legend
      .label(v-if="modelValue && !search") {{ placeholder }}
    template(v-if="!textarea")
      input(
        ref="input",
        :value="modelValue",
        :type="showPassword ? 'text' : type",
        :placeholder="placeholder",
        :disabled="disabled",
        :class="{ input_search: search, input: !search, input_disabled: disabled }",
        onfocus="this.removeAttribute('readonly');",
        readonly,
        @input="(e) => changeHandler(e)"
      )
      button.icon.icon-eye_off(
        v-if="eye",
        :class="{ 'icon-eye': showPassword }",
        type="button",
        @click="showHidePassword"
      )
    textarea.input(
      v-else,
      :style="{ height: `${inputHeight}px` }",
      :value="modelValue",
      :placeholder="placeholder",
      :disabled="disabled",
      @input="(e) => changeHandler(e)"
    )
    .error-message(v-if="errorMessage")
      p {{ errorMessage }}
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

interface IProps {
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string | Ref<string>;
  type?: string;
  inputHeight?: number;
  search?: boolean;
  eye?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  placeholder: "",
  disabled: false,
  errorMessage: "",
  type: "text",
  inputHeight: 132,
  search: false,
  eye: false
});
const emit = defineEmits(["update:modelValue"]);

const showPassword = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);

const textarea = computed<boolean>(
  () => props.type === "textarea"
);

const changeHandler = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
const showHidePassword = (): void => {
  showPassword.value = !showPassword.value;
  input.value?.focus();
};
</script>
<style scoped lang="scss">
.icon {
  display: inline-block;
  &.icon_search {
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
    @include icon-mask("search", 24px, 24px, $text-color-2);
  }
  &.icon-eye_off {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 15px;
    @include icon-mask("eye-off", 24px, 24px, $text-color-2);
    &.icon-eye {
      @include icon-mask("eye", 24px, 24px, $text-color-2);
    }
  }
}
.outer-div {
  width: 100%;
}
.outer-div_search {
  width: 442px;
}
.field-wrapper {
  position: relative;
  border: none;
  border-radius: 8px;
  padding: 0 0 0 0;
  margin-left: 0;
  margin-right: 0;
  background-color: $white;

  .legend {
    display: block;
    height: 16px;
    position: absolute;
    left: 12px;
    top: -10px;
    .label {
      padding: 0 4px;
      transition: all ease-in-out 200ms;
      font-size: 13px;
      font-family: Titillium Web, sans-serif;
      background-color: $white;
      border-radius: 5px;
      color: var(--primary);
      font-weight: 500;
    }
  }

  .input {
    transition: all 200ms ease-out;
    display: block;
    border: 1px solid #D4D4D4;
    width: 100%;
    border-radius: 8px;
    padding: 13px 16px 13px 16px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;
    color: $text-color;
    resize: none;
    @include placeholder {
      color: #747474;
    }
    &:focus {
      outline: none;
      border: 1px solid $primary;
    }
    &:hover {
      border: 1px solid $primary;
    }
  }
  .input_search {
    transition: all 200ms ease-out;
    display: block;
    border: 1px solid transparent;
    width: 100%;
    border-radius: 8px;
    padding: 13.5px 16px 13.5px 48px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;
    color: $text-color;
    resize: none;
    background-color: input-background-color;
    @include placeholder {
      color: $text-color-2;
    }
    &:focus {
      outline: none;
      border: 1px solid $primary;
      &:hover {
        border: 1px solid $primary;
      }
    }
    &:hover {
      border: 1px solid #8f8f8f;
    }
  }
  .input_disabled {
    background-color: $prefilled;
    &:hover {
      cursor: not-allowed;
      border: 1px solid #D4D4D4;
    }
  }
}
.error-message {
  p {
    padding: 3px 0 0 11px;
    font-family: Titillium Web, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0;
    color: $red;
  }
}
</style>
