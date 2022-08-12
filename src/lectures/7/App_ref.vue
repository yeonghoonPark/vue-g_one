<template>
  <div>
    <h2>{{ message }}</h2>
    <button type="button" @click="addMessage">add Click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let message = ref("Hello");
    const addMessage = () => {
      message.value = message.value + "!";
    };

    console.log("message: ", message);
    console.log("typeof message: ", typeof message);

    return { message, addMessage };
  },
};
</script>

<style lang="scss" scoped></style>
