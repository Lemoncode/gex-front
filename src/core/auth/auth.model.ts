import { User, UserCredentials } from './api/auth.api-model';

export interface AuthContextModel {
  isAuthenticated: boolean;
  user: User;
  doLogin: (UserCredentials: UserCredentials) => Promise<void>;
}

export const createEmptyUser = (): User => ({
  id: '',
  nombre: '',
  rol: {
    id: '',
    nombre: '',
  },
});
