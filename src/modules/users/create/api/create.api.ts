import axios from 'axios';
import { UnidadRolList, Usuario } from './create.api-model';

export const getUnidadRolList = async (): Promise<UnidadRolList> => {
  const response = await axios.get<UnidadRolList>('/api/lookup/unidad-rol');
  return response.data;
};

export const saveUser = async (user: Usuario): Promise<boolean> => {
  const response = await axios.post<boolean>('/api/user', user);
  return response.data;
};

export const isAlreadyExistingEmail = async (email: string) => {
  const path = `/api/user/${email}/exists`;
  const response = await axios.get(path);
  return response.data;
};
