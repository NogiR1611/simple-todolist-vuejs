<template>
    <div class="mt-8">
        <div v-for="todo in allTodos" :key="todo.id">
            <Todoitem :todo="todo" />
        </div>
    </div>
</template>

<script>
import Todoitem from "./Todoitem";
import {mapGetters} from "vuex";
export default {
    name : "Todolist",
    components : {
        Todoitem
    },
    computed : {
        ...mapGetters(["allTodos"])
    }
}
</script>

<style>

</style>