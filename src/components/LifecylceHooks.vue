<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="Hello" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifrcycleChild v-if="visible"></LifrcycleChild>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import LifrcycleChild from "./LifrcycleChild.vue";

export default {
  components: { LifrcycleChild },
  setup() {
    // console.log("setup");
    const inputRef = ref(null);
    const message = ref("");
    const visible = ref(false);

    // onBeforeMount(() => {
    //   console.log("onBeforeMount");
    // });

    // onMounted(() => {
    //   console.log("onMounted", inputRef.value);
    // });

    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate", message.value);
    //   console.log(
    //     "DOM Content: ",
    //     document.querySelector("#message").textContent,
    //   );
    // });

    // onUpdated(() => {
    //   console.log("onUpdated", message.value);
    //   console.log(
    //     "DOM Content: ",
    //     document.querySelector("#message").textContent,
    //   );
    // });

    return { inputRef, message, visible };
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  // },
};
</script>

<style lang="scss" scoped></style>
