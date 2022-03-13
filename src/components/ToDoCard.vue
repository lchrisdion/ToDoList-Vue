<template>
  <div
    class="!md:container min-w-[25%] my-2 bg-white border-gray-200 text-gray-800 px-2 sm:px-4 py-5 rounded-lg dark:bg-gray-800 dark:text-white"
  >
    {{ item.title }}
  </div>
</template>
<script>
export default {
  name: "ToDoCard",
  props: ["item"],
};
</script>
<style lang=""></style>
