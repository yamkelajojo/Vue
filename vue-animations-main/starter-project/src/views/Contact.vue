<template>
  <div class="contact">
    <h1>Contact</h1>
    <transition-group
      appear
      class="contact"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li
        class="contact"
        v-for="(icon, index) in icons"
        :key="icon.name"
        :data-index="index"
      >
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
  </div>
</template>

<script>
// import Contacts from '../components/Contacts.vue'
import { ref } from "vue";
import gsap from "gsap";

export default {
  // components: {Contacts}
  setup() {
    const icons = ref([
      { name: "alternate_email", text: "by email" },
      { name: "local_phone", text: "by phone" },
      { name: "local_post_office", text: "by post" },
      { name: "local_fire-department", text: "by smoke signal" },
    ]);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done, //lo done is for transition so that uAfter uzongena after iaNIMATION KA ENTER IS COMPLETE, CAUSE IF YOU DONT , IT C.LOGS before animation is complete
      });
    };
    return { icons, beforeEnter, enter };
  },
};
</script>

<style>
.contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
  /* background-color: rgb(193, 213, 203); */
}

.contact li {
  list-style-type: none;
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
}
</style>
