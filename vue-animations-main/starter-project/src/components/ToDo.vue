<template>
  <div class="toDo">
    <input type="text" @keyup.enter="enterToDo" v-model="enteredValue" @click="zama" placeholder="Add a new todo.." id="toDoInp" class="cardLook">
    <div v-if="toDoList.length>0">
        <div v-for="todo in toDoList" :key="todo.id">
            <div class="cardLook toDoItem">{{ todo.title }}</div>
        </div>
    </div>
    <div v-else>
        <h3>Nothing to do...</h3>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'

export default {
    name: 'ToDo',
    setup(){
        const toDoList = ref(
            [
                {title:'Play Video Games',id: 1},
                {title:'Make vue apps',id:2}
            ]
        )

        const enteredValue = ref('')

        const newToDo = ref('')

        watchEffect(() =>{
            toDoList.value.length
        })

        const enterToDo = () => {
            newToDo.value = {title : enteredValue.value,
            id: toDoList.value.at(-1).id+1}
            toDoList.value.push(newToDo.value)
        }

        

        return {toDoList, enterToDo, enteredValue}
    },
}
</script>

<style>
.cardLook{
    margin: 30px 0px;
    padding: 15px 20px;
    min-width: 400px;
    border: none;
    border-radius: 13px;
    background-color: white;
}

.toDoItem{
    max-width: 400px;
    background-color: white;
    margin: 11px 0px;
    box-shadow:rgba(70, 70, 70, 0.24) 0px 2px 7px;
}

.toDo{
    max-width: 400px;
    font-weight: bolder; 
}
</style>

<!--bru i just bought groceries today of which i didnt even think are gonna make it, if i did have i was gonna pull through but i dont even have that R100 in my account-->