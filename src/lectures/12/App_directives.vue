<template>
  <div>
    <p v-text="message"></p>
    <p v-html="htmlString"></p>
    <hr />
    <p v-pre>{{message 안녕하세요}}</p>
    <p v-once>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello");
    const htmlString = ref("<strong>This is v-html</strong>");
    return { message, htmlString };
  },
};
</script>

<style lang="scss" scoped></style>
