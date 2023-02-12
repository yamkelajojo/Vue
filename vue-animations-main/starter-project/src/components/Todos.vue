<template>
    <div class="todos">
        <input
            class="cardLook"
            type="text"
            v-model="newTodo"
            @keypress.enter="addTodo"
            placeholder="Add a new todo"
        >
        <div v-if="todos.length">
            <ul>
                <li class="toDoItem cardLook" v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
                {{ todo.text }}
                </li>
            </ul>
        </div>
        <div v-else>
            <h3>Nothing to do...</h3>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'Todos',

    setup(props, {emit}){
        const todos = ref([
            {text: 'make the bed', id: 1},
            {text: 'play video games', id: 2},
        ])

        const newTodo = ref('')

        const addTodo = () => {
            if(newTodo.value){
                const id = Math.random()
                todos.value = [{text: newTodo.value,id}, ...todos.value]
                newTodo.value = ''
            } else {
                emit('badValue')
            }
        }

        const deleteTodo = (id) => {
            todos.value = todos.value.filter(todo => todo.id != id)
        }

        return {todos, addTodo, deleteTodo, newTodo}
    }

    
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

ul{
    list-style: none;
}

.toDoItem{
    /* max-width: 400px; */
    background-color: white;
    margin: 15px 0px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
}

.toDo{
    max-width: 400px;
    font-weight: bolder; 
}

:hover .toDoItem{
    cursor: pointer;
}
</style>