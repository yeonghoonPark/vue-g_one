<template>
  <div>
    <button type="button" @click="increaseCounter">
      {{ state.counter }}
    </button>
    <button type="button" @click="increaseDeepCounter">
      {{ state.deep.counter }}
    </button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      counter: 0,
      deep: {
        counter: 0,
      },
    });
    const increaseCounter = () => {
      state.counter++;
    };
    const increaseDeepCounter = () => {
      state.deep.counter++;
    };
    return { state, increaseCounter, increaseDeepCounter };
  },
};
</script>

<style lang="scss" scoped></style>
