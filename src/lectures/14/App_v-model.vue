<template>
  <div>
    <h2>input value</h2>
    <!-- 단방향에서 값을 동기화 -->
    <input
      type="text"
      :value="inputValue"
      @input="(event) => (inputValue = event.target.value)"
    />

    <!-- v-model을 이용한 양방향 -->
    <input type="text" v-model.trim="inputValue" />

    <li>inputValue = {{ inputValue }}</li>

    <hr style="margin: 2rem" />

    <h2>textarea value</h2>
    <!-- 단방향에서 값을 동기화 -->
    <textarea
      cols="30"
      rows="10"
      :value="textareaValue"
      @input="(event) => (textareaValue = event.target.value)"
    ></textarea>

    <!-- v-model을 이용한 양방향 -->
    <textarea cols="30" rows="10" v-model="textareaValue"></textarea>

    <li>textarea value = {{ textareaValue }}</li>

    <hr style="margin: 2rem" />

    <h2>checkbox value</h2>
    <label for="checkTest1">{{ checkboxValue }}</label>
    <!-- 단방향에서 값을 동기화 -->
    <input
      type="checkbox"
      id="checkTest1"
      :checked="checkboxValue"
      @change="(event) => (checkboxValue = event.target.checked)"
    />
    <!-- v-model을 이용한 양방향 -->
    <label for="checkTest2">{{ checkboxValue }}</label>
    <input
      type="checkbox"
      id="checkTest2"
      true-value="Yes"
      false-value="No"
      v-model="checkboxValue"
    />

    <hr />

    <h2>checkbox values</h2>
    <label>
      <input type="checkbox" id="" value="html" v-model="checkboxValues" />
      HTML
    </label>
    <label>
      <input type="checkbox" id="" value="css" v-model="checkboxValues" />
      CSS
    </label>
    <label>
      <input
        type="checkbox"
        id=""
        value="javascript"
        v-model="checkboxValues"
      />
      javaScirpt
    </label>
    <div>{{ checkboxValues }}</div>
    <hr />

    <h2>radio value</h2>
    <label>
      <input
        type="radio"
        name="type"
        value="O"
        :checked="radioValue === 'O'"
        @change="(evnet) => (radioValue = evnet.target.value)"
      />
      O형
    </label>
    <label>
      <input
        type="radio"
        name="type"
        value="A"
        :checked="radioValue === 'A'"
        @change="(evnet) => (radioValue = evnet.target.value)"
      />
      A형
    </label>
    <div>radioValue = {{ radioValue }}</div>

    <hr />

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value=""></option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">javaScript</option>
    </select>
    <p>selectValue = {{ selectValue }}</p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    const inputValue = ref(null);
    const textareaValue = ref(null);
    const checkboxValue = ref("No");
    const checkboxValues = ref([]);
    const radioValue = ref("O");
    const selectValue = ref("");
    return {
      inputValue,
      textareaValue,
      checkboxValue,
      checkboxValues,
      radioValue,
      selectValue,
    };
  },
};
</script>

<style lang="scss" scoped></style>
