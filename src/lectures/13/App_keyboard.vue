<template>
  <div>
    <input type="text" @keyup="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const todos = reactive([]);

    const addTodo = (event) => {
      const todo = event.target.value;
      if (event.key === "Enter") {
        todos.push(todo);
        event.target.value = "";
        // event.target.focus();
      }
    };

    return { todos, addTodo };
  },
};
</script>

<style lang="scss" scoped></style>
