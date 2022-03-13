<template>
  <div class="home m-2">
    <div class="md:flex overflow-x-auto">
      <ToDoCard v-for="(item, index) in toDos" :key="index" :item="item" />
    </div>
    <div v-if="isAddingItem">
      <ToDoTitleForm @add-to-do-item="addToDoItem"></ToDoTitleForm>
    </div>
    <div v-else>
      <button class="add-item-button" @click.prevent="inputToDoTitle">+</button>
    </div>
  </div>
</template>

<script>
import ToDoTitleForm from "../components/ToDoTitleForm.vue";
// @ is an alias to /src
import ToDoCard from "../components/ToDoCard.vue";
export default {
  name: "HomeView",
  components: {
    ToDoCard,
    ToDoTitleForm,
  },
  state: {},
  data() {
    return {};
  },
  computed: {
    toDos() {
      return this.$store.state.toDos;
    },
    isAddingItem() {
      return this.$store.state.isAddingItem;
    },
  },
  methods: {
    addToDoItem(toDoItem) {
      console.log(toDoItem);
      this.$store.dispatch("addToDoItem", toDoItem);
    },
    inputToDoTitle() {
      this.$store.dispatch("setIsInputItem", true);
    },
  },
};
</script>
