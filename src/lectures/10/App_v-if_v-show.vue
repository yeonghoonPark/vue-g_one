<template>
  <div>
    <h2 v-if="visible">True</h2>
    <h2 v-else>False</h2>
    <button type="button" @click="onVisible">Click</button>
    <hr />
    <h2 v-if="type === 'A'">A</h2>
    <h2 v-else-if="type === 'B'">B</h2>
    <h2 v-else-if="type === 'C'">C</h2>
    <h2 v-else>A, B, C가 아닙니다.</h2>
    <button @click="type = 'A'">A</button>
    <button @click="type = 'B'">B</button>
    <button @click="type = 'C'">C</button>
    <button @click="type = 'D'">D</button>
    <hr />
    <template v-if="visible">
      <h1>This is v-if</h1>
    </template>
    <hr />
    <ul v-show="visible">
      <li>This is v-Show</li>
    </ul>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export default {
  setup() {
    const visible = ref(true);

    const onVisible = () => {
      visible.value ? (visible.value = false) : (visible.value = true);
    };

    const type = ref("A");

    return { visible, onVisible, type };
  },
};
</script>

<style lang="scss" scoped></style>
