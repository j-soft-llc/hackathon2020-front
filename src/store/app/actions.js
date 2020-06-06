import axios from 'axios';

export async function login(context) {
  const token = await axios.get('/api/auth/user/');
  localStorage.setItem('token', token.data.token);
  await context.commit('setToken', token.data.token);
  return token.data;
}
