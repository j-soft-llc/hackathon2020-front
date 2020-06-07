export function setInit(state, payload) {
  state.inited = payload;
}

export function setItems(state, payload) {
  console.log('payload', payload);
  console.log('state', state);
  state.items = payload;
}
