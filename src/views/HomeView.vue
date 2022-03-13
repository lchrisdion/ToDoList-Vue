<template>
  <div class="home m-2">
    <ToDoTitleForm @add-to-do-item="addToDoItem"></ToDoTitleForm>
    <div class="md:flex overflow-x-auto">
      <ToDoCard v-for="(item, index) in toDos" :key="index" :item="item" />
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
  state: { },
  data() {
    return {toDos: [] };
  },
  methods: {
    addToDoItem(toDoItem) {
      this.toDos.push(toDoItem);
    },
  },
};
</script>
