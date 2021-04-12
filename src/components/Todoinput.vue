<template>
    <div class="flex flex-col">
        <input
            class="max-w-md mx-auto border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
            v-on:change="todoTextChange"
            v-bind:value="todoText"
            type="text"
        />
        <button
            class="inline-block mx-auto my-3 bg-gray-700 py-2 px-4 rounded-md text-white transition duration-300 ease-in-out hover:bg-gray-400 text-bg-gray-800"
            v-on:click="addTodoI" 
        >
        Add
        </button>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import {v1} from "uuid";

export default {
    data() {
        return {
            todoText : ""
        };
    },
    name : "Todoinput",
    methods : {
        ...mapActions(["addTodo"]),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        addTodoI(){
            this.addTodo({
                id : v1(),
                job : this.todoText
            });
            this.todoText = "";
        }
    }
}
</script>

<style>

</style>