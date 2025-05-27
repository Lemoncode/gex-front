import axios from 'axios';
import { Expediente } from '../editar-datos-generales.vm';

export const getExpedienteById = async (id: string): Promise<Expediente> => {
  const response = await axios.get<Expediente>(`/api/expediente/${id}`);
  return response.data;
};
