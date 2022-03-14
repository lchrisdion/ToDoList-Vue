<template>
  <div class="home m-2">
    <div class="md:flex overflow-x-auto">
      <ToDoCard
        v-for="(item, index) in toDoList"
        :key="index"
        :item="item"
        :index="index"
      />
    </div>
    <div v-if="isAddingItem">
      <ToDoTitleForm @add-to-do-item="addToDoItem"></ToDoTitleForm>
    </div>
    <div v-else>
      <button
        class="container flex py-5 font-bold"
        @click.prevent="inputToDoTitle"
      >
        + Add a card
      </button>
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
  created(){
    this.$store.dispatch("getToDoItem");
  },
  computed: {
    toDoList() {
      console.log(this.$store.state.toDoList.length);
      return this.$store.state.toDoList;
    },
    isAddingItem() {
      return this.$store.state.isAddingItem;
    },
  },
  methods: {
    addToDoItem(toDoItem) {
      this.$store.dispatch("addToDoItem", toDoItem);
    },
    inputToDoTitle() {
      this.$store.dispatch("setIsInputItem", true);
    },
  },
};
</script>
