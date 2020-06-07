export default {
  getLeaders(state) {
    return state.items;
  },
  getLeaderById: (state) => (id) => state.items.find((leader) => leader.id === id),
};
