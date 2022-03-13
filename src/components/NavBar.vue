<template lang="">
  <nav
    class="bg-white border-gray-200 m-2 px-4 sm:px-4 py-5 rounded-lg dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >To do</span
        >
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" to="/">Home</router-link>
          <router-link class="nav-link active" to="/about">About</router-link>
        </div>
      </div> -->
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
