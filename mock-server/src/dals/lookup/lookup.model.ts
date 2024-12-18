import { ObjectId } from 'mongodb';

export interface Lookup {
  _id: ObjectId;
  codigo: string;
  nombre: string;
}
