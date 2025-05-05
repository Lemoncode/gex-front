import axios from 'axios';
import { CollectionQuery } from '#common/models';
import { Expediente } from './list.api-model';

export const getExpedientes = async (page?: number, pageSize?: number): Promise<CollectionQuery<Expediente>> => {
  const response = await axios.get<CollectionQuery<Expediente>>('/api/expediente', {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
};
