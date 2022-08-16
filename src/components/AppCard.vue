<template>
  <div class="card">
    <!-- $slots -->
    <div class="card-header" v-if="$slots.header">
      <slot name="header" :header-message="headerMessage"></slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot :child-message="childMessage" :hello-message="helloMessage"></slot>
    </div>
    <div class="card-footer text-muted" v-if="hasFooter">
      <slot name="footer" :footer-message="footerMessage"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export default {
  setup(props, { slots }) {
    const childMessage = ref("자식 컴포넌트 메세지");
    const helloMessage = ref("안녕하세요!!");
    const headerMessage = ref("헤더 메세지");
    const footerMessage = ref("푸터 메세지");

    // footer가 있다면 footer가 나오고 footer가 없다면 나오지 않는다.
    const hasFooter = computed(() => !!slots.footer);

    return {
      childMessage,
      helloMessage,
      headerMessage,
      footerMessage,
      hasFooter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
