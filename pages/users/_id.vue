<template>
  <div class="container">
    <h3>{{ user.name }}</h3>
    <hr />
    <h5>
      {{ user.email }}
    </h5>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ params, error, store }) {
    try {
      const user = await store.dispatch("users/fetchUserById", params.id);
      return { user };
    } catch (error) {
      error(error);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
