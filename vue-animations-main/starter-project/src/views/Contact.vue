<template>
  <h1>Contact</h1>
  <div class="contactDiv">
    <div class="contact" v-for="contact in contacts" :key="contact.id"><h4>{{ contact.title }}</h4></div>
  </div>
</template>


<script>

// import Contacts from '../components/Contacts.vue'
import { ref } from 'vue';


export default {
  // components: {Contacts}
  setup() {
    const contacts = ref([
      { title: "Email", id: 1 },
      { title: "Phone", id: 2 },
      { title: "Post", id: 3 },
      { title: "Contact Signal", id: 4 }
    ])

    return { contacts }
  }
}
</script>

<style>
.contactDiv {
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  place-items: center;
  text-align: center;
  /* background-color: rgb(193, 213, 203); */
}

.contact{
  background-color: white;
  border-radius: 6px;
  min-width: 170px;
  min-height: 120px;
  margin: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(70, 70, 70, 0.24) 0px 2px 7px;
}
</style>