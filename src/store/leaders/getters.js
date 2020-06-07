export default {
  getLeaders(state) {
    return state.items;
  },
  getLeaderById: (state) => (id) => state.leaders.items.find((leader) => leader.id === id),
};
