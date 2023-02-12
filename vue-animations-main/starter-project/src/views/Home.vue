<template>
  <div class="home">
    <Toast v-if="showToast"/>
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
</style>
