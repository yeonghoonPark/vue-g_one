<template>
  <div>
    <button type="text" @click="increase">{{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const increase = () => {
      counter.value++;
    };

    onMounted(() => {
      console.log("onMounted");
    });
    return { counter, increase };
  },
};
</script>

<style lang="scss" scoped></style>
