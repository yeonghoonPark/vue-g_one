<template>
  <div>
    <p @click="testToRefs">{{ author }}</p>
    <p @click="testToRef">{{ price }}</p>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const book = reactive({
      author: "Jasper",
      year: "2022",
      title: "Leanning",
      description: "none",
      price: "시간",
    });

    const { author, title } = toRefs(book);
    const testToRefs = () => {
      book.author = book.author + "!";
    };

    const price = toRef(book, "price");
    const testToRef = () => {
      book.price = book.price + "!!";
    };

    return { author, title, book, testToRefs, price, testToRef };
  },
};
</script>

<style lang="scss" scoped></style>
