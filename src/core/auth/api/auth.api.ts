// login, logout, whoami(me)
import axios from 'axios';
import { User, UserCredentials } from './auth.api-model';

export const login = async (userCredentials: UserCredentials): Promise<void> => {
  const response = await axios.post('/api/security/login', userCredentials);
  return response.data;
};

export const whoami = async (): Promise<User> => {
  const response = await axios.get('/api/security/whoami', { withCredentials: true });
  return response.data;
};
