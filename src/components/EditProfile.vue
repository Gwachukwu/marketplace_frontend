<template>
  <div>
    <h1 class="p-4">Edit Profile</h1>
    <div v-if="isLoading" class="text-center" data-test="spinner">
      <b-spinner type="grow"></b-spinner>
    </div>
    <b-form
      v-else
      @submit="onSubmit"
      class="form-container m-auto px-3 py-5 rounded"
      data-test="edit-profile-form"
    >
      <b-alert :variant="alert.variant" :show="alert.show">{{
        alert.message
      }}</b-alert>
      <b-form-group id="email" label="Email:" label-for="email">
        <b-form-input
          id="email"
          type="email"
          v-model="form.email"
          required
          readonly
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

      <b-button
        type="submit"
        variant="primary"
        class="mt-2"
        :disabled="form.processing"
        >{{ form.processing ? "Please wait..." : "Update" }}</b-button
      >
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        processing: false,
      },
      alert: {
        message: "",
        show: false,
        variant: "",
      },
      isLoading: true,
      userId: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      //form is making request
      this.form.processing = true;
      //remove alert
      this.alert.show = false;

      const { firstName, lastName, location } = this.form;

      if (!firstName || !lastName || !location) {
        this.form.processing = false;
        this.alert.show = true;
        this.alert.variant = "danger";
        return (this.alert.message = "All fields are required");
      }

      const update = { firstName, lastName, location };

      axios
        .patch(`${process.env.VUE_APP_API}/users/${this.userId}`, update)
        .then((res) => {
          this.form.processing = false;
          this.alert.show = true;
          this.alert.variant = "success";
          return (this.alert.message = res.data.message);
        })
        .catch((err) => {
          this.form.processing = false;
          this.alert.show = true;
          this.alert.variant = "danger";
          return (this.alert.message = err.response.data.error);
        });
    },
    getUser() {
      axios
        .get(`${process.env.VUE_APP_API}/users`)
        .then((res) => {
          
          const {
            firstName,
            lastName,
            email,
            location,
            _id: id,
          } = res.data.user;

          this.form.firstName = firstName;
          this.form.lastName = lastName;
          this.form.email = email;
          this.form.location = location;
          this.userId = id;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted: function () {
    this.getUser();
  },
};
</script>

<style scoped>
.form-container {
  max-width: 30rem;
  box-shadow: 1px 4px 30px rgba(0, 0, 0, 0.2);
}
</style>