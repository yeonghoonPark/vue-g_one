<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reversMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("Hello Vue");
    const reversMessage = ref("");

    watch(
      message,
      (newValue) => {
        reversMessage.value = newValue.split("").reverse().join("");
      },
      {
        immediate: true,
      },
    );
    return { message, reversMessage };
  },
};
</script>

<style lang="scss" scoped></style>
