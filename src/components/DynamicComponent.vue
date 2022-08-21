<template>
  <div class="container py-4">
    <button
      class="btn btn-primary me-2"
      @click="changeCurrentComponent(DynamicApple)"
    >
      사과
    </button>
    <button
      class="btn btn-danger"
      @click="changeCurrentComponent(DynamicBanana)"
    >
      빠나나
    </button>
    <hr />
    <component :is="currentComponent" />
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import DynamicApple from "./DynamicApple.vue";
import DynamicBanana from "./DynamicBanana.vue";

const currentComponent = shallowRef(DynamicApple);
const changeCurrentComponent = (component) =>
  (currentComponent.value = component);
</script>

<style lang="scss" scoped></style>
