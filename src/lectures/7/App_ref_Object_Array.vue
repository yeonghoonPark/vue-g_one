<template>
  <div></div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    // ref를 object로
    const cnt = ref(0);
    const state = reactive({
      cnt,
    });
    console.log(state.cnt);
    console.log("state.count: ", state.cnt.value); // value가 랩핑되기 때문에 value라는 키값 생략.

    // ref를 array로
    const message = ref("Hi");
    const arr = reactive([message]);
    console.log("arr[0]: ", arr[0]);

    return { cnt, state, arr };
  },
};
</script>

<style lang="scss" scoped></style>
