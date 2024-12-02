import axios from 'axios';
import { UsersQuery } from './list.api-model';

export const getUsers = async (page?: number, pageSize?: number): Promise<UsersQuery> => {
  const response = await axios.get<UsersQuery>('/api/user', {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
};
