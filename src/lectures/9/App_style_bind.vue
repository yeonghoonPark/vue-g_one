<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum
      at debitis harum dolores. Blanditiis fuga cupiditate iste in aperiam
      doloremque repudiandae provident recusandae quia voluptatum, vero, saepe
      neque alias!
    </div>
    <button @click="addFontSize">+</button>
    <button @click="subFontSize">-</button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

export default {
  setup() {
    // const styleObject = reactive({
    //   color: "blue",
    //   fontSize: "0.5rem",
    //   fontWeight: 900,
    // });

    const fontSize = ref(16);

    const styleObject = computed(() => {
      return {
        color: "blue",
        fontSize: fontSize.value + "px",
        fontWeight: 900,
      };
    });

    const addFontSize = () => {
      fontSize.value++;
    };

    const subFontSize = () => {
      fontSize.value--;
    };
    return { styleObject, addFontSize, subFontSize };
  },
};
</script>

<style lang="scss" scoped></style>
