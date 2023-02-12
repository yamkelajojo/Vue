<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast"/>
    </transition>
    <Todos @badValue = "triggerToast"/>
  </div>
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

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return {showToast, triggerToast}
  }
}
</script>

<style>
/*enter classes*/
.toast-enter-from{
  opacity: 0;
  transform: translateY(-60px);
}

/* .toast-enter-to{
  opacity: 1;
  transform: translateY(0);
} */
/* dont have to eneter these in beacuase they're default properties of the element */

.toast-enter-active{
  transition: all 0.3s ease;
}
/*leave classes*/

/* .toast-leave-from{
  opacity: 1;
  transform: translateY(0);
} */
/* dont have to eneter these in beacuase they're default properties of the element */

.toast-leave-to{
  opacity: 0;
  transform: translateY(-60px);
}

.toast-leave-active{
  transition: all 0.3s ease;
}
</style>
