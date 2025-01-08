import axios from 'axios';
import { CollectionQuery } from '#common/models';
import { Usuario } from './list.api-model';

export const getUsers = async (page?: number, pageSize?: number): Promise<CollectionQuery<Usuario>> => {
  const response = await axios.get<CollectionQuery<Usuario>>('/api/user', {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
};
