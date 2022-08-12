<template>
  <div>
    <h1>반응</h1>
    <h2 @click="reactiveFunction">{{ reactiveMessage }}</h2>
    <h1>무반응</h1>
    <h2 @click="nomalFunction">{{ nomalMessage }}</h2>
  </div>
</template>

<script>
import { ref, isRef, onMounted, onBeforeMount } from "vue";
export default {
  setup() {
    console.log("setup");
    const reactiveMessage = ref("reactive Test");
    const reactiveFunction = () => {
      reactiveMessage.value = reactiveMessage.value + "!";
    };
    console.log(isRef(reactiveMessage));

    let nomalMessage = "nomal Test";
    const nomalFunction = () => {
      nomalMessage = nomalMessage + "!";
    };
    console.log(isRef(nomalMessage));

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    return { reactiveMessage, nomalMessage, reactiveFunction, nomalFunction };
  },
};
</script>

<style lang="scss" scoped></style>
