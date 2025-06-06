import { User, UserCredentials } from './api/auth.api-model';

export interface AuthContextModel {
  isAuthenticated: boolean;
  user: User;
  doLogin: (UserCredentials: UserCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

export const createEmptyUser = (): User => ({
  id: '',
  nombre: '',
  apellido: '',
  rol: {
    id: '',
    nombre: '',
  },
});
