<template>
  <label class="form-label">
    {{ label }}
  </label>
  <input type="text" v-bind="$attrs" v-model="value" class="form-control" />
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
