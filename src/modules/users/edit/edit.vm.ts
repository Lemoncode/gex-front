import { Lookup } from '#common/models';
import { generateRandomPassword } from './edit.business';

export interface Usuario {
  nombre: string;
  apellido: string;
  telefono: string;
  movil: string;
  email: string;
  rol: string;
  unidad: string;
  contraseña?: string;
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
  contraseña: generateRandomPassword(),
  esResponsable: false,
  esProponente: false,
  esAutorizante: false,
});

export interface UnidadRolList {
  roles: Lookup[];
  unidades: Lookup[];
}

export const createEmptyUnidadRolList = (): UnidadRolList => ({
  roles: [],
  unidades: [],
});
