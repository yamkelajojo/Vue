<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme ="sale" @close="toggleModal"/>
  </div>
  <button @click.alt="toggleModal">Toggle Modal (alt)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App by DzowDzow :)',
      header: 'Sign up for the giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false
    }
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },

    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>

@import './assets/global.css';

#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>