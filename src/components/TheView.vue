<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="sayHello" />
      <LabelInput label="Name" data-id="id입니다." />
      <hr />
      <FancyButton>Click</FancyButton>
      <FancyButton>Click</FancyButton>
      <hr />
      <AppCard>
        <template #header>Title</template>
        <template #default>Contents</template>
        <template #footer>Footer</template>
      </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from "./MyButton.vue";
import LabelInput from "./LabelInput.vue";
import FancyButton from "./FancyButton.vue";
import AppCard from "./AppCard.vue";

export default {
  components: { MyButton, LabelInput, FancyButton, AppCard },
  setup() {
    const sayHello = () => {
      alert("Hello");
    };
    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
