import { ObjectId } from 'mongodb';

export interface Roles {
  id: string;
  nombre: string;
}

export interface UnidadProponentes {
  _id: ObjectId;
  codigo?: string;
  nombre: string;
}
