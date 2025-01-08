export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  esResponsable: boolean;
  esAutorizante: boolean;
}

export const createEmptyUser = (): Usuario => ({
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  rol: '',
  esResponsable: false,
  esAutorizante: false,
});
