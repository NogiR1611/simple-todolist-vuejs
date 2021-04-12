<template>
  <div class="text-center">
    <img class="mx-auto w-1/12" alt="Vue logo" src="./assets/logo.png">
    <h3 class="text-gray-500 text-xl my-3">Creating Simple Todo List</h3>
    <Todoinput />
    <Todolist />
  </div>
</template> 

<script>
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";

export default {
  name: 'App',
  components: {
    Todoinput,Todolist,
  }
}
</script>

<style src="./assets/style.css" />
