<template>
  <div>
    <LabelInputVue
      :model-value="firstName"
      @update:model-value="(value) => $emit('update:firstName', value)"
      label="firstName"
    />
    <LabelInputVue
      :model-value="lastName"
      @update:model-value="(value) => $emit('update:lastName', value)"
      label="lastName"
    />
  </div>
</template>

<script>
import LabelInputVue from "./LabelInput.vue";

export default {
  props: ["firstName", "lastName"],
  emits: ["update:firstName", "update:lastName"],
  components: { LabelInputVue },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
