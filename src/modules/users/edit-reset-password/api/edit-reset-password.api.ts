import axios from 'axios';

export const updatePassword = async (password: string, id: string): Promise<boolean> => {
  const response = await axios.put<boolean>(`/api/user/resetPassword/${id}`, { contraseña: password });

  return response.data;
};
