<template>
  <main>
    <div class="container py-4">
      <PostCreate @createPost="createPost" />
      <hr class="my-4" />
      <div class="row g-5">
        <div class="col col-4" v-for="post in posts" :key="post.id">
          <PostItem
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :isLike="post.isLike"
            @toggleLike="post.isLike = !post.isLike"
          />
          <!-- <button @click="post.isLike = !post.isLike">Toggle</button> -->
        </div>
      </div>

      <hr class="my-4" />

      <LabelInput
        v-model="userName"
        label="Name"
        class="parent-class"
        style="color: red"
        id="parent-id"
      />
    </div>
  </main>
</template>

<script>
import { reactive, ref } from "vue";
import PostItem from "./PostItem.vue";
import PostCreate from "./PostCreate.vue";
import LabelInput from "./LabelInput.vue";

export default {
  components: {
    PostItem,
    PostCreate,
    LabelInput,
    LabelInput,
  },
  setup() {
    const userName = ref("");
    const firstName = ref("");
    const lastName = ref("");

    const post = reactive({
      title: "제목2",
      contents: "내용2",
    });

    const posts = reactive([
      { id: 1, title: "제목1", contents: "내용1", isLike: true, type: "news" },
      { id: 2, title: "제목2", contents: "내용2", isLike: true, type: "news" },
      { id: 3, title: "제목3", contents: "내용3", isLike: true, type: "news" },
      {
        id: 4,
        title: "제목4",
        contents: "내용4",
        isLike: false,
        type: "notice",
      },
      {
        id: 5,
        title: "제목5",
        contents: "내용5",
        isLike: false,
        type: "notice",
      },
    ]);
    const createPost = (newPost) => {
      console.log("createPost");
      console.log("newPost: ", newPost);
      posts.push(newPost);
    };

    return { post, posts, createPost, userName, firstName, lastName };
  },
};
</script>

<style lang="scss" scoped></style>
