<template>
  <div>
    <div :class="classObject">This is Text</div>
    <button type="button" @click="onTest">Toggle</button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref, reactive } from "vue";

export default {
  setup() {
    const isActive = ref(false);
    const hasError = ref(false);
    const classObject = reactive({
      active: true,
      "text-danger": true,
    });

    // const onTest = () => {
    //   isActive.value && hasError.value
    //     ? ((isActive.value = false), (hasError.value = false))
    //     : ((isActive.value = true), (hasError.value = true));
    // };

    const onTest = () => {
      classObject.active && classObject["text-danger"]
        ? ((classObject.active = false), (classObject["text-danger"] = false))
        : ((classObject.active = true), (classObject["text-danger"] = true));
    };

    return { isActive, hasError, onTest, classObject };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
  font-size: 2rem;
  font-style: italic;
}

.text-danger {
  color: red;
}
</style>
