export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const getters = {
  users: state => state.users
};

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const users = await this.$axios.$get(
        "http://jsonplaceholder.typicode.com/users"
      );
      commit("setUsers", users);
    } catch (error) {
      throw error;
    }
  },

  async fetchUserById({}, usesId) {
    try {
      return await this.$axios.$get(
        `http://jsonplaceholder.typicode.com/users/${usesId}`
      );
    } catch (error) {
      console.log(error);
    }
  }
};
