<template>
  <div class="container">
    <section>
      <h1>{{ pageTitle }}</h1>
      <div class="list-group">
        <b-list-group>
          <b-list-group-item
            class="px-auto "
            v-for="user in users"
            :key="user.id"
            :to="'/users/' + user.id"
          >
            {{ user.name }} {{ user.email }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, error }) {
    return $axios
      .$get("http://jsonplaceholder.typicode.com/users")
      .then(users => {
        return {
          users
        };
      })
      .catch(err => {
        error(err);
      });
  },
  data() {
    return {
      pageTitle: "User page"
      // users: []
    };
  }
};
</script>

<style scoped>
.list-group {
  width: 500px;
}
</style>
