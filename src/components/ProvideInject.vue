<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject Component</div>
      <div class="card-body">
        <button @click="count++">count증가</button>
        <p>appMessage: {{ appMessage }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
import { provide, readonly, ref, inject } from "vue";
export default {
  components: { Child },
  setup() {
    const staticMessage = "static message";
    const message = ref("ref-message");
    const count = ref(10);

    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage;
    };

    provide("static-message", staticMessage);
    provide("message", { message: readonly(), updateMessage });
    provide("count", count);

    const appMessage = inject("app-message", "default");

    return { count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
