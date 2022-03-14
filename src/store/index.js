import axios from "../../config/axios";
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
    addToDoItem(context, toDoItem) {
      const access_token = process.env.VUE_APP_TOKEN;
      axios({
        url: "todos",
        method: "POST",
        headers: { access_token: access_token },
        data: toDoItem,
      })
        .then((response) => {
          console.log(response);
          context.dispatch("getToDoItem");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeToDoItem(context, id) {
      console.log("ok");
      console.log(id);
      axios({
        method: "DELETE",
        url: `todos/${id}`,
        headers: {
          access_token: process.env.VUE_APP_TOKEN,
        },
      })
        .then((response) => {
          console.log(response);
          context.dispatch("getToDoItem");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setIsInputItem(context, isAddingItem) {
      try {
        context.commit("setIsInputItem", isAddingItem);
      } catch (error) {
        console.log(error);
      }
    },
    getToDoItem(context) {
      const access_token = process.env.VUE_APP_TOKEN;
      axios({
        url: "todos",
        method: "GET",
        headers: { access_token: access_token },
      })
        .then((response) => {
          console.log(response);
          context.commit("setToDoList", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
