<template>
  <div class="home">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
// import Stores from "@/components/Stores.vue";
// import EditProfile from "@/components/EditProfile.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    // Stores,
    // EditProfile,
  },
};
</script>

<style scoped>
</style>