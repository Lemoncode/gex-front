export interface Usuario {
  id: string;
  nombre: string;
  apellido: string;
  telefono?: string;
  movil?: string;
  email?: string;
  rol?: string;
  unidad: string;
  esResponsable?: boolean;
  esProponente?: boolean;
  esAutorizante?: boolean;
}

export const createEmptyUsuario = (): Usuario => ({
  id: '',
  nombre: '',
  apellido: '',
  telefono: '',
  movil: '',
  email: '',
  rol: '',
  unidad: '',
  esResponsable: false,
  esProponente: false,
  esAutorizante: false,
});
