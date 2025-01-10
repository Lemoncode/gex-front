import { Lookup } from '#common/models';

export interface UnidadRolList {
  roles: Lookup[];
  unidades: Lookup[];
}

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
