<template>
  <div
    class="!md:container min-w-[25%] my-2 bg-white border-gray-200 text-gray-800 px-4 sm:px-4 py-5 rounded-lg dark:bg-gray-800 dark:text-white"
  >
    <div class="flex flex-wrap justify-between items-center mx-auto">
      {{ item.title }}<button class="text-red-400" @click.prevent="removeToDoItem">Remove</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDoCard",
  props: ["item", "index"],
  methods: {
    removeToDoItem() {
      this.$store.dispatch("removeToDoItem", this.index);
    },
  },
};
</script>
<style lang=""></style>
