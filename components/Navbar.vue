<template>
  <div class="header">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">NuxtJS</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/users">Users</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item v-if="isAuth" href="#" @click.prevent="logout"
            >Logout</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style></style>
