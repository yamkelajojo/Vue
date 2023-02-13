<template>
    <div class="todos">
        <input
            class="cardLook"
            type="text"
            v-model="newTodo"
            @keypress.enter="addTodo"
            placeholder="Add a new todo"
        >
        <transition name="switch" mode="out-in"> <!--this mode out-in makes the out trans first, then in trans first. theres also one thats vice versa. Because iiTransition ziyagaxana-->
            <div v-if="todos.length">
                <ul>
                    <transition-group tag="ul" name="list" appear> <!--appear makes them do the transition when the page loads-->
                        <li class="toDoItem cardLook" v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">
                        {{ todo.text }}
                        </li>
                    </transition-group>
                </ul>
            </div>
            <div v-else>
                <h3>Nothing to do...</h3>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'Todos',

    setup(props, {emit}){
        const todos = ref([
            {text: '$CHASETHEMONEY X2', id: 1},
            {text: '$$$$$$', id: 2},
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
    max-width: 400px;
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

.todos ul{
    position: relative; /*  positioned relative so that in leave animation 
    for todos sliding down when entering, its position will be absolute
    so that leave animation will occur kwi list yonke. without doing this
    sliding down will only occur in enter, in leave sliding up wont happen*/
}

/* list transitions */

.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-to{
    opacity:1;
    transform: scale(1);
}
.list-enter-active{
    transition: all 0.4s ease;
}

.list-leave-from {
    opacity:1;
    transform: scale(1);
}

.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}

.list-leave-active {
    transition: all 0.3s ease;
    position: absolute;
}

.list-move{
    transition: all 0.4s ease; /*makes them slide down when a new todo comes in ONLY when it comes in.*/ 
}

/**switch transitions */
.switch-enter-from,
.switch-leave-to{ /*both get this transition effect cause this state is the end risukt for botth
    its initial and end state*/
    opacity: 0;
    transform: translateY(20px); 
}

/* dont need to add this because they are initial conditions vele */
/* .switch-enter-to,
.switch-leave-from{
    opacity: 1;
    transform: translateY(0px);
} */

.switch-enter-active,
.switch-leave-active{
    transition: all 0.5s ease;
}


/* .todos{
    max-width: 400px;
    margin: 20px auto;
    position: relative;
}

input{
    width: 100%;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.todos ul{
    position:relative;
    padding:0;
}

.todos li{
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
}

.todos li:hover{
    cursor: pointer;
} */
</style>