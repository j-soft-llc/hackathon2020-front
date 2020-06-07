import axios from 'axios';

export async function getLeaders(context) {
  const token = localStorage.getItem('token');
  const items = await axios.get('/api/leaders/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  console.log(items);
  await context.commit('setItems', token.data);
}
