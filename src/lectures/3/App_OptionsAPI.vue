<template>
  <div>
    <button type="text" @click="increase">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
  },
  mounted() {
    console.log("on mounted");
  },
};
</script>

<style lang="scss" scoped></style>
