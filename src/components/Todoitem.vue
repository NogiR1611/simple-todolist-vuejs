<template>
    <div>
        <h3 class="inline-block text-2xl text-blue-600" v-if="!editing">{{ todo.job }}</h3>
        <input
            class="border p-2 border-gray-500 rounded-lg"
            v-bind:value="todoText"
            v-on:change="todoTextChange"
            v-else
            type="text"
        />
        <button
            class="inline-block bg-green-600 rounded-lg text-white p-4 m-10 transition duration-500 ease-in-out hover:bg-green-400"
            v-on:click="updateTodoI(todo)"
        >
            {{ editing ? 'update' : 'edit' }}
        </button>
        <button
            class="inline-block bg-red-700 rounded-lg text-white p-4 transition duration-500 ease-in-out hover:bg-red-500"
            v-on:click="deleteTodo(todo.id)"
        >
            delete
        </button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props : {
        todo: {}
    },
    data(){
        return {
            todoText : "",
            editing: false
        };
    },
    name : "Todoitem",
    methods : {
        ...mapActions(['deleteTodo','updateTodo']),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        updateTodoI(todo){
            this.editing = this.editing == true ? false : true ;
            if(this.editing){
                this.todoText = todo.job;
                this.updateTodo(todo);
            }
            else{
                todo.job = this.todoText;
            }
        }
    }
}
</script>

<style>

</style>