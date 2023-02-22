<template>
  <div class="about">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
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
import gsap from "gsap";

export default {
  setup() {
    const showTitle = ref(true);

    const beforeEnter = (el) => {
      console.log("before enter - set initial state");
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };

    const enter = (el, done) => {
      console.log("starting to enter - make transition");
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done, //AfteEnter fires ingekagqibi iAnimation so we put this onComplete: done
      });
    };

    const afterEnter = () => {
      console.log("after enter");
    };
    return {
      showTitle,
      beforeEnter,
      enter,
      afterEnter,
    };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}
</style>
