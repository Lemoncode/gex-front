import axios from 'axios';
import { UnidadRolList, Usuario } from './edit.api-model';

export const getUnidadRolList = async (): Promise<UnidadRolList> => {
  const response = await axios.get<UnidadRolList>('/api/lookup/unidad-rol');
  return response.data;
};

export const saveUser = async (user: Usuario): Promise<boolean> => {
  const response = await axios.post<boolean>('/api/user', user);
  return response.data;
};
