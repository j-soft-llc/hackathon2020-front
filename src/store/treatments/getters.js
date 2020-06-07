export default {
  getTreatments(state) {
    return state.items;
  },
  getTreatmentById: (state) => (id) => state.items.find((treatment) => treatment.id === id),
};
