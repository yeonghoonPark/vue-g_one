<template>
  <div>
    <h1>Skills</h1>
    <ul>
      <template v-for="(item, index) in evenItems" :key="item.id">
        <!-- <li v-if="index % 2 === 0"> -->
        <li>
          <span>index 짝수의 값 = </span>{{ item.message }}
          <br />
          <span>index = </span>{{ index }}
        </li>
      </template>
    </ul>
    <hr />
    <ul>
      <li v-for="(value, key, index) in userObject" :key="key">
        {{ key }} {{ value }} [{{ index }}]
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { reactive } from "vue";

export default {
  setup() {
    const items = reactive([
      { id: 1, message: "javaScript" },
      { id: 2, message: "react" },
      { id: 3, message: "vue" },
      { id: 4, message: "angular" },
    ]);

    const evenItems = computed(() => {
      return items.filter((item, index) => index % 2 === 0);
    });

    const userObject = reactive({
      name: "Jasper",
      gender: "male",
      birthday: "2000-02-20",
    });

    return { items, evenItems, userObject };
  },
};
</script>

<style lang="scss" scoped></style>
