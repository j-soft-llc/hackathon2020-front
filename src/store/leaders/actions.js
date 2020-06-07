import axios from 'axios';

export async function getLeaders() {
  const items = await axios.get('/api/leaders/');
  console.log(items);
  // await context.commit('setItems', token.data);
}
