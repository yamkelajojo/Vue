<template>
    <div v-if="to_do_pop_up" class="headup" @click="!to_do_pop_up">
        <h5>You must enter a value for the to do</h5>
    </div>
</template>

<script>

import { ref } from 'vue';
import { watchEffect } from '@vue/runtime-core'

export default {
    name: 'ToDoPopUp',
    props: ['to_do_pop_up'],
    setup(){
    
        return {}
    }
}
</script>

<style>
.headup {
    position: fixed;
    margin: auto;
    top: 35px;
    padding: 5px 120px;
    color: white;
    background-color: rgb(232, 23, 103);
    border-radius: 12px;
}
</style>