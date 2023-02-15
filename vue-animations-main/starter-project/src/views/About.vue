<template>
  <div class="about">
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLEave"
    >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis aut
      earum id facere voluptas voluptatem consequatur corrupti vero rem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis aut
      earum id facere voluptas voluptatem consequatur corrupti vero rem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis aut
      earum id facere voluptas voluptatem consequatur corrupti vero rem?
    </p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showTitle = ref(true);

    const beforeEnter = (el) => {
      console.log("bfore enter", el);
    };

    const enter = (el) => {
      console.log("enter", el);
    };

    const afterEnter = (el) => {
      console.log("after enter", el);
      setTimeout(() => (showTitle.value = false), 2000);
    };

    const beforeLeave = (el) => {
      console.log("before leave");
      el.style.color = "orange";
    };

    const leave = () => {
      console.log("leave");
    };

    const afterLEave = () => {
      console.log("after leave");
    };

    return {
      beforeEnter,
      enter,
      afterEnter,
      showTitle,
      beforeLeave,
      leave,
      afterLEave,
    };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 3s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 3s;
}
</style>
