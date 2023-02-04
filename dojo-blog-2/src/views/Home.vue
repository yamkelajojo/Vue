<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue'

export default {
  name: 'Home ',

  setup() {
    const search = ref('')
    const names = ref(['dojo', 'quakes', 'scooby', 'may', 'josta', 'nendro'])

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames }
  }
}
</script>

