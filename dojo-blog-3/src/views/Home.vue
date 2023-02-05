<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stopWatching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home ',

  setup() {
    const search = ref('')
    const names = ref(['dojo', 'quakes', 'scooby', 'may', 'josta', 'nendro'])


    const stopWatch = watch(search,() => { //runs initially when the component first loads/ when the stup function first runs
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(()=>{ //runs initially when the component first loads/ when the stup function first runs
      console.log('watchEffect function ran', search.value)
    })
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = ()=> { 
      stopEffect()// when invoked here they get stopped from watching
      stopWatch()
    }

    return { names, search, matchingNames, handleClick }
  }
}
</script>

