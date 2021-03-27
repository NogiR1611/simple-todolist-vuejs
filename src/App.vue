<template>
  <div class="text-center">
    <img class="mx-auto" alt="Vue logo" src="./assets/logo.png">
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
