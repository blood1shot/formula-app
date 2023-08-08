<template lang="pug">
.outer-div(:class="{ 'outer-div_search': type === 'search' }")
  fieldset.field-wrapper
    legend.legend
      .label {{ label }}
    input(
      ref="input",
      :value="modelValue",
      :type="showPassword ? 'text' : type",
      :placeholder="placeholder",
      :disabled="disabled",
      :class="{ input: true, input_disabled: disabled, input_error: errorMessage, input_empty: type === '' }",
      onfocus="this.removeAttribute('readonly');",
      readonly,
      @input="(e) => changeHandler(e)"
    )
    .icon(:class="{ icon_active: modelValue && type !== 'card', icon_card: type === 'card', icon_email: type === 'email', icon_phone: type === 'phone', icon_lock: type === 'password', icon_search: type === 'search' }")
    button.button-eye_off(
      v-if="type === 'password'",
      :class="{ 'button-eye': showPassword }",
      type="button",
      @click="showHidePassword"
    )
    .error-message(v-if="errorMessage")
      p {{ errorMessage }}
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface IProps {
  modelValue: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  errorMessage?: string | Ref<string>;
  type?: string;
}
withDefaults(defineProps<IProps>(), {
  modelValue: "",
  placeholder: "",
  label: "",
  disabled: false,
  errorMessage: "",
  type: ""
});
const emit = defineEmits(["update:modelValue"]);

const showPassword = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);

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
  position: absolute;
  top: 13px;
  left: 14px;
  pointer-events: none;
  &.icon_search {
    @include icon-mask-test("search", 20px, 20px, #4E5766);
  }
  &.icon_email {
    @include icon-mask-test("email", 20px, 20px, #4E5766);
  }
  &.icon_phone {
    @include icon-mask-test("phone", 20px, 20px, #4E5766);
  }
  &.icon_card {
    width: 20px;
    height: 20px;
    background-image: url('@/assets/icons/test-proj/card.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  &.icon_lock {
    @include icon-mask-test("lock", 20px, 20px, #4E5766);
  }
  &.icon_active {
    background-color: #625DF5 !important;
  }
}
.button-eye_off {
  position: absolute;
  top: 13px;
  right: 14px;
  left: auto;
  cursor: pointer;
  @include icon-mask-test("eye-off", 20px, 20px, #4E5766);
}
.button-eye {
  top: 13px;
  right: 14px;
  @include icon-mask-test("eye", 20px, 20px, #4E5766);
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
    margin-bottom: 6px;
    .label {
      font-size: 14px;
      font-family: Poppins, sans-serif;
      color: var(--primary);
      font-weight: 500;
    }
  }

  .input {
    transition: all 200ms ease-out;
    display: block;
    border: 1px solid #D0D5DD;
    width: 100%;
    border-radius: 8px;
    padding: 10px 14px 10px 42px;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    color: Black;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    resize: none;
    &_empty {
      padding: 10px 14px;
    }
    @include placeholder {
      color: #747474;
    }
    &:focus {
      outline: none;
      ~ .icon:not(.icon_card) {
        background-color: #625DF5 !important;
      }
    }
  }
  .input_disabled {
    background-color: $prefilled;
    &:hover {
      cursor: not-allowed;
      border: 1px solid #D4D4D4;
    }
  }
  .input_error {
    border: 1px solid #EB5757;
  }
}
.error-message {
  p {
    padding-top: 3px;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0;
    color: $red;
  }
}
</style>
