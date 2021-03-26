import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : [
      {
        id : 1,
        job : "membuat meja"
      },
      {
        id : 2,
        job : "membuat program web"
      },
      {
        id : 3,
        job : "memasang mesin"
      },
    ],
  },
  getters : {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({commit},todo){
      commit('add_todo',todo);
    },
    deleteTodo({commit},id){
      commit('delete_todo',id);
    },
    updateTodo({commit},todo){
      commit('update_todo',todo);
    }
  },
  mutations: {
    add_todo(state,todo){
      state.todos.push(todo);
    },
    delete_todo(state,id){
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state,todo){
      state.todos.findIndex(t => t.id == todo.id);
    }
  },
  modules: {
  }
})
