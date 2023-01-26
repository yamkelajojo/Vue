<template>
  <h1>Dojo Reaction Timer</h1>
  <RT></RT>
</template>

<script>
import Results from './components/Results.vue'
import Block from './components/Block.vue'


export default {
  name: 'App',
  components: {Block, Results}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
