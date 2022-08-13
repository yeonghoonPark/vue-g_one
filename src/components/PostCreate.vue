<template>
  <div class="row g-3">
    <!-- <button
      class="btn btn-primary"
      @click="$emit('createPost', 1, 2, 3, '홍길동')"
    >
      Button
    </button> -->
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="new">News</option>
        <option value="notice">Notice</option>
      </select>
    </div>
    <div class="col col-8">
      <input type="text" class="form-control" v-model="title" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="createPost">Add</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // emits: ["createPost"],
  emits: {
    createPost: (newPost) => {
      if (!newPost.title) {
        return false;
      } else if (!newPost.title) {
        return false;
      }
      return true;
    },
  },
  setup(props, { emit }) {
    const type = ref("news");
    const title = ref("");

    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value,
      };
      emit("createPost", newPost);
      type.value = "news";
      title.value = "";
    };
    return { createPost, title, type };
  },
};
</script>

<style lang="scss" scoped></style>
