import axios from 'axios';

export async function getTreatments(context) {
  const token = localStorage.getItem('token');
  const items = await axios.get('/api/leaders/initiative/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  console.log(items);
  await context.commit('setItems', items.data);
  return true;
}
