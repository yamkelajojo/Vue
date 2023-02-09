<template>
  <div>
    <input type="text" placeholder="Add a new todo" id="toDoInp">
    <div v-if="toDoList.length>=0">
        <div v-for="todo in toDoList" :key="todo.id">
            <div>{{ todo.title }}</div>
        </div>
    </div>
    <div v-else>
        <h3>Nothing to do...</h3>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'ToDo',

    toDoList: ref(
        [
            {title:'Play Video Games',id: 1},
            {title:'Make vue apps',id:2}
        ]
    ),
    setup(){

        return {}
    },
}
</script>

<style>

</style>

<!--bru i just bought groceries today of which i didnt even think are gonna make it, if i did have i was gonna pull through but i dont even have that R100 in my account-->