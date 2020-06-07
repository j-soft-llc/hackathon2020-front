import state from './state';
import getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
