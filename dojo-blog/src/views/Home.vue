<template>
  <div class="home">
    <p>Home</p>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import {ref, reactive} from 'vue'

export default {
  name: 'Home ',

  setup(){

    const p = ref(null) // assigned it a vule of null
    const name = ref('mario')
    const age = ref(30) // a contants refs value can change. use refs to make em accessible in template.refs are reactive values

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return{ name, age, handleClick, p} //must return and must return them as an object if you wanna use them in template

  }
}
</script>
