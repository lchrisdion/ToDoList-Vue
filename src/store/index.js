import { createStore } from "vuex";

export default createStore({
  state: {
    toDoList: [],
    isAddingItem: false,
  },
  getters: {},
  mutations: {
    setToDoList(state, toDoList) {
      state.toDoList = toDoList;
    },
    setIsInputItem(state, isAddingItem) {
      state.isAddingItem = isAddingItem;
    },
  },
  actions: {
    addToDoItem({ context, state }, toDoItem) {
      try {
        console.log(toDoItem.title);
        let currentToDoList = state.toDoList;
        currentToDoList.push(toDoItem);
        context.commit("setToDoList", currentToDoList);
      } catch (error) {
        console.log(error);
      }
    },
    removeToDoItem({ context, state }, index) {
      try {
        let currentToDoList = state.toDoList;
        currentToDoList.pop(index);
        context.commit("setToDoList", currentToDoList);
      } catch (error) {
        console.log(error);
      }
    },
    setIsInputItem(context, isAddingItem) {
      try {
        context.commit("setIsInputItem", isAddingItem);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
