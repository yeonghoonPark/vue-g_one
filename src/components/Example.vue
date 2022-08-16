<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="my-button" @click="sayHello" />
      <LabelInput label="Name" data-id="id입니다." />
      <hr />
      <FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>

      <!-- default값을 받을 때는 #default를 v-slot로 축약할 수 있다, v-slot는 #으로 단축할 수 있다. -->
      <FancyButton>
        <template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton>

      <hr />
      <AppCard>
        <template #header="{ headerMessage }"
          >Title{{ headerMessage }}</template
        >
        <template #default="{ childMessage, helloMessage }"
          >디폴트입니다. {{ message }}
          <br />
          {{ childMessage }}
          <br />
          {{ helloMessage }}
        </template>

        <template #footer="{ footerMessage }"
          >Footer{{ footerMessage }}</template
        >
      </AppCard>
      <hr />
      <AppCard>
        게시글입니다.
        <template #footer>this is footer</template>
      </AppCard>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import MyButton from "./MyButton.vue";
import LabelInput from "./LabelInput.vue";
import FancyButton from "./FancyButton.vue";
import AppCard from "./AppCard.vue";

export default {
  components: { MyButton, LabelInput, FancyButton, AppCard },
  setup() {
    const sayHello = () => {
      alert("Hello");
    };
    const slotArgs = ref("header");
    const message = ref("안녕하세요");

    return { sayHello, slotArgs, message };
  },
};
</script>

<style lang="scss" scoped></style>
