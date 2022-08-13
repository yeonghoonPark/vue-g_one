<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click.self="clickP">
          P 영역
          <!-- <span @click.stop="clickSpan"> SPAN 영역 </span> -->
          <span @click="clickSpan"> SPAN 영역 </span>
          <a href="https://www.naver.com" @click.prevent.stop="clickA"
            >A 영역</a
          >
        </p>
      </div>
    </div>
    <button @click.once="clickOnce">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log("clickDiv");
      // location.href = "https://www.naver.com";
    };

    const clickP = () => {
      console.log("clickP");
    };

    const clickSpan = () => {
      console.log("clickSpan");
      // alert("Like~😍");
    };

    const clickA = () => {
      alert("This is A");
    };

    const clickOnce = () => {
      console.log("only one function");
    };
    return { clickDiv, clickP, clickSpan, clickA, clickOnce };
  },
};
</script>

<style>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background: #ccc;
}

#modifiers p {
  background: #999;
}

#modifiers span {
  display: block;
  background: #666;
}
</style>
