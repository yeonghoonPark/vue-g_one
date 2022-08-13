<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);
    const object = reactive({
      count: 0,
    });
    const person = reactive({
      name: "홍길동",
      age: 30,
      hobby: "운동",
      obj: {
        count: 0,
      },
    });

    watch(
      () => x.value + y.value,
      (sum, oldValue) => {
        console.log("sum: ", sum);
        console.log("oldValue: ", oldValue);
      },
    );

    watch([x, y], ([newX, newY]) => {
      console.log("newX: ", newX, "newY: ", newY);
    });

    // watch(
    //   () => object.count,
    //   (newObject, oldObject) => {
    //     console.log("newObject: ", newObject, "oldObject: ", oldObject);
    //   },
    // );

    // watch(object, (newObject, oldObject) => {
    //   console.log("newObject: ", newObject, "oldObject: ", oldObject);
    // });

    watch(person, (newValue, oldValue) => {
      console.log("newValue: ", newValue);
    });

    return { x, y, object, person };
  },
};
</script>

<style lang="scss" scoped></style>
