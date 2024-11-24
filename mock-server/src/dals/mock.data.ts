import { ObjectId } from 'mongodb';
import { User } from './user/index.js';

export interface DB {
  users: User[];
}

export const db: DB = {
  users: [
    {
      _id: new ObjectId(),
      nombre: 'Carlos',
      apellidos: 'González Pérez',
      email: 'carlos.gonzalez@example.com',
      telefonoFijo: '910123456',
      telefonoMovil: '620123456',
      telefonoInstitucional: '930123456',
      clave: 'carlos123',
      rol: 'Administrador',
      esResponsable: true,
      esAutorizante: false,
    },
    {
      _id: new ObjectId(),
      nombre: 'María',
      apellidos: 'Martínez López',
      email: 'maria.martinez@example.com',
      telefonoFijo: '910234567',
      telefonoMovil: '620234567',
      telefonoInstitucional: '930234567',
      clave: 'maria456',
      rol: 'Usuario',
      esResponsable: false,
      esAutorizante: true,
    },
    {
      _id: new ObjectId(),
      nombre: 'Juan',
      apellidos: 'Rodríguez Sánchez',
      email: 'juan.rodriguez@example.com',
      telefonoFijo: '910345678',
      telefonoMovil: '620345678',
      telefonoInstitucional: '930345678',
      clave: 'juan789',
      rol: 'Supervisor',
      esResponsable: true,
      esAutorizante: true,
    },
    {
      _id: new ObjectId(),
      nombre: 'Laura',
      apellidos: 'García Ruiz',
      email: 'laura.garcia@example.com',
      telefonoFijo: '910456789',
      telefonoMovil: '620456789',
      telefonoInstitucional: '930456789',
      clave: 'laura101',
      rol: 'Usuario',
      esResponsable: false,
      esAutorizante: false,
    },
    {
      _id: new ObjectId(),
      nombre: 'Miguel',
      apellidos: 'Fernández Gómez',
      email: 'miguel.fernandez@example.com',
      telefonoFijo: '910567890',
      telefonoMovil: '620567890',
      telefonoInstitucional: '930567890',
      clave: 'miguel202',
      rol: 'Gerente',
      esResponsable: true,
      esAutorizante: false,
    },
  ],
};
