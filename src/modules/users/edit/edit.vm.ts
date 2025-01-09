import { Lookup } from '#common/models';

export interface Usuario {
  nombre: string;
  apellido: string;
  telefono: string;
  movil: string;
  email: string;
  rol: string;
  unidad: string;
  contraseña: string;
  esResponsable?: boolean;
  esProponente?: boolean;
  esAutorizante?: boolean;
}

export const createEmptyUsuario = (): Usuario => ({
  nombre: '',
  apellido: '',
  telefono: '',
  movil: '',
  email: '',
  rol: '',
  unidad: '',
  contraseña: 'hola',
  esResponsable: undefined,
  esProponente: undefined,
  esAutorizante: undefined,
});

export interface UnidadRolList {
  roles: Lookup[];
  unidades: Lookup[];
}

export const createEmptyUnidadRolList = (): UnidadRolList => ({
  roles: [],
  unidades: [],
});
