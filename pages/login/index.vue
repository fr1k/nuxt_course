<template>
  <div class="login-form">
    <p>
      <nuxt-link to="/">
        <h4>Home</h4>
      </nuxt-link>
    </p>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Login :" label-for="input-1">
        <b-form-input
          id="input-1"
          type="password"
          required
          placeholder="Enter login"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password :" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped>
.login-form {
  width: 300px;
  margin-top: 20px;
}
</style>
