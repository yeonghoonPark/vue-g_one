<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="Hello" />
    <LifrcycleChild></LifrcycleChild>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from "vue";
import LifrcycleChild from "./LifrcycleChild.vue";

export default {
  components: { LifrcycleChild },
  setup() {
    // console.log("setup");
    const inputRef = ref(null);

    // onBeforeMount(() => {
    //   console.log("onBeforeMount");
    // });

    // onMounted(() => {
    //   console.log("onMounted", inputRef.value);
    // });

    return { inputRef };
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
