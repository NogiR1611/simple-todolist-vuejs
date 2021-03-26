<template>
    <div>
        <h3 v-if="!editing">{{ todo.job }}</h3>
        <input
            v-bind:value="todoText"
            v-on:change="todoTextChange"
            v-else
            type="text"
        />
        <button v-on:click="updateTodoI(todo)">{{ editing ? 'update' : 'edit' }}</button>
        <button v-on:click="deleteTodo(todo.id)">delete</button>
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