<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in $parent.fruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello ~!");

    const sayHello = () => {
      alert(message.value);
    };

    return { message, sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
