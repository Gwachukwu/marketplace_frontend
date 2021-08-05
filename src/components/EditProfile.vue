<template>
  <div>
    <h1 class="p-4">Edit Profile</h1>
    <b-form @submit="onSubmit" class="form-container m-auto px-3 py-5 rounded">
      <b-alert variant="danger" :show="alert.show">{{ alert.message }}</b-alert>
      <b-form-group id="email" label="Email:" label-for="email">
        <b-form-input
          id="email"
          type="email"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="firstName" label="First Name:" label-for="firstName">
        <b-form-input
          id="firstName"
          v-model="form.firstName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="lastName" label="Last Name:" label-for="lastName">
        <b-form-input
          id="lastName"
          v-model="form.lastName"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="location" label="Location:" label-for="location">
        <b-form-input
          id="location"
          v-model="form.location"
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
        firstName: "",
        lastName: "",
        email: "",
        location: "",
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