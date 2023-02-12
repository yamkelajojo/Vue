<template>
  <div class="home">
    <Toast v-if="showToast"/>
    <Todos @badValue = "triggerToast"/>
  </div>
  <transition name="fade">
    <div v-if="showP">hello, ninjas</div>
  </transition>

  <button @click="showP=!showP">toggle</button>
</template>

<script>
import {ref} from 'vue';
import Todos from '../components/Todos.vue'
import Toast from '@/components/Toast.vue'


export default {

  name: 'Home',
  components: {Todos, Toast},

  setup(){
    const showToast = ref(false)
    const showP = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return {showToast, triggerToast, showP}
  }
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}

.fade-enter-to{
  opacity: 1
}

.fade-enter-active{
  transition: all 2s ease;
}

.fade-leave-from{
  opacity: 1;
}

.fade-leave-to{
  opacity: 0;
}

.fade-leave-active{
  transition: all 2s ease;
}
</style>
