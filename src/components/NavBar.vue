<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="px-2">
      <b-navbar-brand
        ><router-link to="/" class="text-white text-decoration-none"
          >MarketPlace</router-link
        ></b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-links-items">
          <b-nav-item @click="gotoEdit">Edit Profile</b-nav-item>
          <b-nav-item @click="logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    gotoEdit() {
      this.$router.push("/edit-profile");
    },
  },
};
</script>

<style scoped>
.nav-links-items {
  margin-left: auto;
}
</style>
