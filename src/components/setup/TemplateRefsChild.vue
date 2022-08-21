<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in $parent.fruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const message = ref("Hello ~!");

const sayHello = () => {
  alert(message.value);
};

defineExpose({
  // 키값이 같을 경우 1가지로 명시할 수 있지만 우선 2개 기재
  message: message,
  sayHello: sayHello,
});
</script>

<style lang="scss" scoped></style>
