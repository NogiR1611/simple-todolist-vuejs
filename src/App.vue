<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
