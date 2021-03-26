<template>
    <div>
        <input
            v-on:change="todoTextChange"
            v-bind:value="todoText"
            type="text"
        />
        <button v-on:click="addTodoI" >add</button>
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