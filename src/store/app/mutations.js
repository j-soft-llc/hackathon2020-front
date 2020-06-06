export function setInit(state, payload) {
  state.inited = payload;
}

export function setToken(state, payload) {
  console.log('payload', payload);
  console.log('state', state);
  state.token = payload;
  state.isLoggedIn = true;
}
