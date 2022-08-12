<template>
  <div>
    <h2>보관</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button type="text" @click="message = message + '!'">Click</button>
    <hr />
    <h2>v-html</h2>
    <p>{{ rawHTML }}</p>
    <p v-html="rawHTML"></p>
    <hr />
    <div :title="dynamicTitle">Mouse over</div>
    <input type="text" :disabled="inInputDisabled" />
    <input type="text" :="attrs" />
    <h2>JavaScript</h2>
    {{ message.split("").reverse().join("") }}
    <br />
    {{ inInputDisabled ? "Yes" : "No" }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello");
    const rawHTML = ref("<li> Hi </li>");
    const dynamicTitle = ref("This is dynamicTitle");
    const inInputDisabled = ref(false);
    const attrs = ref({
      type: "password",
      value: "123456789",
      disabled: false,
    });
    return { message, rawHTML, dynamicTitle, inInputDisabled, attrs };
  },
};
</script>

<style lang="scss" scoped></style>
