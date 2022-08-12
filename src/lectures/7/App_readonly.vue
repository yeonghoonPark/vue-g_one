<template>
  <div>
    <button type="button" @click="onOriginal">{{ original.cnt }}</button>
    <br />
    <button type="button" @click="onCopy">{{ copy.cnt }}</button>
  </div>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    const original = reactive({
      cnt: 0,
    });

    const onOriginal = () => {
      original.cnt++;
    };

    // original의 cnt를 그대로 가져와서 사용 한 것이기 때문에 original에서의 cnt값 변화시 copy의 값도 변한다, 하지만 readonly로 지정한 copy쪽에서는 original쪽으로 값을 변환하여 반영시킬 수 없다.
    const copy = readonly(original);

    const onCopy = () => {
      copy.cnt++;
    };

    return { original, onOriginal, copy, onCopy };
  },
};
</script>

<style lang="scss" scoped></style>
