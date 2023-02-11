<template>
    <div class="toDo">
    <input type="text" @keyup.enter="enterToDo" v-model="enteredValue" @click="zama" placeholder="Add a new todo.." id="toDoInp" class="cardLook">
    <div v-if="toDoList.length>0">
        <div v-for="(todo, index) in toDoList" :key="todo.id">
            <div class="cardLook toDoItem" @click="removeToDo(index)">{{ todo.title }}</div>
        </div>
    </div>
    <div v-else>
        <h3>Nothing to do...</h3>
    </div>
    </div>
    <ToDoPopUp :to_do_pop_up="to_do_pop_up"/>
</template>

<script>
import ToDoPopUp from '@/components/ToDoPopUp.vue';
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'

export default {
    name: 'ToDo',
    components: {ToDoPopUp},
    setup(){
        const toDoList = ref(
            [
                {title:'Play Video Games',id: 1},
                {title:'Make vue apps',id:2}
            ]
        )

        const to_do_pop_up = ref(false)

        const enteredValue = ref('')

        watchEffect(() => {
            to_do_pop_up.value
        })

        const enterToDo = () => {
            if(enteredValue.value !== ""){
                toDoList.value.push({
                    title: enteredValue.value,
                    id: Date.now()
                })                
            }
            else{
                to_do_pop_up.value = !to_do_pop_up.value
            }
        }

        const removeToDo = (index) => {
            toDoList.value.splice(index, 1)
        }

        

        return {toDoList, enterToDo, enteredValue, removeToDo , to_do_pop_up}
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

:hover .toDoItem{
    cursor: pointer;
}
</style>