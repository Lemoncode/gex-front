import { ObjectId } from 'mongodb';

export interface Expediente {
  id: ObjectId;
  clase: string;
  titulo: string;
  adjudicataria: string;
  estado: string;
}
