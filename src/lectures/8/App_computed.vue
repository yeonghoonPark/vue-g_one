<template>
  <div>
    <h1>Age가 20보다 크나요?</h1>
    <p style="color: red">{{ hasTeacher }}</p>
    <p>Age : {{ teacher.age }}</p>
    <button type="button" @click="onAddAge">addAge</button>
    <button type="button" @click="onSubAge">subAge</button>
    <hr />
    <h2>{{ fullName }}</h2>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

export default {
  setup() {
    const teacher = reactive({
      name: "jasper",
      age: "35",
      gender: "male",
      address: "inchon",
    });

    const hasTeacher = computed(() => {
      return teacher.age > 20 ? "Yes" : "No";
    });

    const onSubAge = () => {
      teacher.age--;
    };

    const onAddAge = () => {
      teacher.age++;
    };

    // --------------------------------------------------

    const firstName = ref("홍");
    const lastNmae = ref("길동");

    // const fullName = computed(() => {
    //   return firstName.value + " " + lastNmae.value;
    // });

    const fullName = computed({
      get() {
        return firstName.value + " " + lastNmae.value;
      },
      set(value) {
        console.log("value:", value);
        const [first, last] = value.split(" ");
        console.log("first: ", first);
        console.log("last: ", last);
      },
    });

    // console.log(fullName.value);

    fullName.value = "변 사또";

    return { teacher, hasTeacher, onSubAge, onAddAge, fullName };
  },
};
</script>

<style lang="scss" scoped></style>
