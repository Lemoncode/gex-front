import axios from 'axios';
import { Usuario } from './edit.api-model';

export const getUserById = async (id: string): Promise<Usuario> => {
  const response = await axios.get<Usuario>(`/api/user/${id}`);

  return response.data;
};

export const updateUser = async (usuario: Usuario): Promise<boolean> => {
  const response = await axios.put<boolean>(`/api/user/${usuario.id}`, usuario);

  return response.data;
};
