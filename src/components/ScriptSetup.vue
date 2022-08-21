<template>
  <div class="container py-4">
    {{ msg }}
    <br />
    {{ message }}
    <input type="text" v-model="message" />
    <button @click="sayHello">Click</button>
    <PostItem type="news" title="제목" contents="내용" :islike="true" />
    <hr />
    <TemplateRefsChild ref="child" />
    <template v-if="child">{{ child.message }}</template>
    <hr />
    <MyButton class="parent-class" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import PostItem from "./setup/PostItem.vue";
import TemplateRefsChild from "./setup/TemplateRefsChild.vue";
import MyButton from "./setup/MyButton.vue";

const msg = "Hello";
const message = ref("");

const sayHello = () => {
  alert("Hello World!");
};

const child = ref(null);

defineExpose({
  msg: msg,
});

const response = await axios("https://api.coinpaprika.com/v1/tickers");
console.log("response: ", response);

const callAPI = async () => {
  const url = "https://api.coinpaprika.com/v1/tickers";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
callAPI();
</script>

<style lang="scss" scoped></style>
