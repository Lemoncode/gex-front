import axios from 'axios';
import { UnidadRolList } from './unidad-rol.api-model';

export const getUnidadRolList = async (): Promise<UnidadRolList> => {
  const response = await axios.get<UnidadRolList>('/api/lookup/unidad-rol');
  return response.data;
};
