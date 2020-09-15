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
  // async asyncData({ store, error }) {
  //   try {
  //     const users = await store.dispatch("users/fetchUsers");
  //     return {};
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // async fetch({ store, error }) {
  //   try {
  //     if (store.getters["users/users"].length === 0) {
  //       await store.dispatch("users/fetchUsers");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  data() {
    return {
      pageTitle: "User page"
      // users: []
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  }
};
</script>

<style scoped>
.list-group {
  width: 500px;
}
</style>
