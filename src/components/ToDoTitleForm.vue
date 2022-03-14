<template>
  <form class="flex flex-col py-3" @submit="onSubmit">
    <textarea
      class="!md:container md:max-w-[25%] form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
      id="title"
      v-model="title"
      cols="30"
      rows="1"
    ></textarea>
    <div class="flex flex-row py-5">
      <button class="flex pr-5 font-bold">Submit</button>
      <button class="flex" @click.prevent="onCancel">Cancel</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "ToDoTitleForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title) {
        let toDoItem = {
          title: this.title,
          description: "testing",
          due_date: "2022-03-30",
          status: "todo",
        };
        this.title = "";
        this.$store.dispatch("setIsInputItem", false);
        this.$emit("add-to-do-item", toDoItem);
      }
    },
    onCancel() {
      this.$store.dispatch("setIsInputItem", false);
    },
  },
};
</script>
<style lang=""></style>
