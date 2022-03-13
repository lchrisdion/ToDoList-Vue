import { createStore } from "vuex";

export default createStore({
  state: {
    toDos: [],
    isAddingItem: false,
  },
  getters: {},
  mutations: {
    setToDoList(state, toDoItem) {
      state.toDos.push(toDoItem);
    },
    setIsInputItem(state, isAddingItem) {
      state.isAddingItem = isAddingItem;
    }
  },
  actions: {
    addToDoItem(context, toDoItem) {
      console.log(toDoItem.title);
      context.commit('setToDoList', toDoItem)
    },
    setIsInputItem(context, isAddingItem) {
      context.commit('setIsInputItem', isAddingItem)
    }
  },
  modules: {},
});
