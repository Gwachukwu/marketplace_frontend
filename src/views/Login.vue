<template>
  <div>
    <div class="mt-5 pt-5">
      <h1>Welcome to MarketPlace</h1>
      <p>Login to continue</p>
    </div>
    <b-form @submit="onSubmit" class="form-container m-auto px-3 py-5 rounded">
      <b-alert variant="danger" :show="alert.show">{{ alert.message }}</b-alert>
      <b-form-group id="username" label="Username:" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mt-2">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        credentials: "perdiem",
      },
      alert: {
        message: "",
        show: false,
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const { username, password, credentials } = this.form;
      
      //validations
      if (!username || !password) {
        this.alert.show = true;
        return (this.alert.message = "All fields are required");
      }

      if (username !== credentials || password !== credentials) {
        this.alert.show = true;
        return (this.alert.message = "Incorrect username or password");
      }

      localStorage.setItem("isAuthenticated", true);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 30rem;
  box-shadow: 1px 4px 30px rgba(0, 0, 0, 0.2);
}
</style>