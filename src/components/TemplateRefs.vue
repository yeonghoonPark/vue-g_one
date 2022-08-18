<template>
  <div class="container py-4">
    <input type="text" ref="input" />
    <p>{{ input }}</p>
    <p v-if="input">
      {{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
    </p>
    <hr />
    <ul>
      <!-- <li v-for="(fruit, index) in fruits" :key="index" ref="itemRefs">
        {{ fruit }}
      </li> -->
      <li v-for="(fruit, index) in fruits" :key="index" :ref="(el) => el.value">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from "vue";

export default {
  setup() {
    const input = ref(null);

    console.log("onMounted: ", input.value);

    onMounted(() => {
      input.value.value = "Hello World";
      console.log("onMounted: ", input.value);

      itemRefs.value.forEach((item) => {
        console.log("item: ", item.textContent);
      });
    });

    const fruits = ref(["apple", "banana", "grape"]);
    const itemRefs = ref([]);

    return { input, fruits, itemRefs };
  },
};
</script>

<style lang="scss" scoped></style>
