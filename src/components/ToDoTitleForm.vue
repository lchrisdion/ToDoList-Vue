<template>
  <div class="flex flex-row">
    <textarea name="" id="title" v-model="title" cols="30" rows="1"></textarea
    ><button class="submmit-button" @click.prevent="onSubmit">Submit</button>
  </div>
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
      let toDoItem = {
        title: this.title,
      };
      this.$emit("add-to-do-item", toDoItem);
      this.title = "";
      this.$store.dispatch("setIsInputItem", false);
    },
  },
};
</script>
<style lang=""></style>
