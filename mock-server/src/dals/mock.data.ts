import { ObjectId } from 'mongodb';
import { Lookup } from '#common/models/index.js';
import { Usuario } from './user/index.js';

export interface DB {
  users: Usuario[];
  unidadProponentes: Lookup[];
  roles: Lookup[];
}

export const db: DB = {
  users: [
    {
      _id: new ObjectId('67e29f6498ec8fa00c141af1'),
      nombre: 'Carlos',
      apellido: 'González Pérez',
      email: 'carlos.gonzalez@example.com',
      telefono: '910123456',
      movil: '620123456',
      rol: {
        id: '677d15fd24c5646a1f7f69c0',
        nombre: 'Usuario-Administrador',
      },
      esResponsable: true,
      esProponente: true,
      esAutorizante: false,
      esContraseñaTemporal: false,
      contraseña: 'carlos123',
      unidad: {
        id: '677d1539c3cb57a1f7b57e77',
        nombre: 'Unidad E',
        code: 'E1',
      },
    },
    {
      _id: new ObjectId('67e2a2a01faec0c33a18c24a'),
      nombre: 'María',
      apellido: 'Martínez López',
      email: 'maria.martinez@example.com',
      telefono: '910234567',
      movil: '620234567',
      rol: {
        id: '677d1609d7dfb3725db36e45',
        nombre: 'Usuario-Escritura',
      },
      esResponsable: true,
      esProponente: true,
      esAutorizante: true,
      esContraseñaTemporal: false,
      contraseña: 'maria456',
      unidad: {
        id: '677d15df0b8b68a6601e826a',
        nombre: 'Unidad B',
        code: 'B2',
      },
    },
    {
      _id: new ObjectId('67e2a2a9bdf6ec804964701e'),
      nombre: 'Juan',
      apellido: 'Rodríguez Sánchez',
      email: 'juan.rodriguez@example.com',
      telefono: '910345678',
      movil: '620345678',
      rol: {
        id: '677d160e6d98cb2a17428884',
        nombre: 'Usuario-Lectura',
      },
      esResponsable: false,
      esProponente: false,
      esAutorizante: false,
      esContraseñaTemporal: true,
      contraseña: 'temp480',
      unidad: {
        id: '677d15f51ea7df458590b5f9',
        nombre: 'Unidad C',
        code: 'C4',
      },
    },
    {
      _id: new ObjectId('67e2a2b17f7177a8b57ceed7'),
      nombre: 'Laura',
      apellido: 'García Ruiz',
      email: 'laura.garcia@example.com',
      telefono: '910456789',
      movil: '620456789',
      rol: {
        id: '677d160e6d98cb2a17428884',
        nombre: 'Usuario-Lectura',
      },
      esResponsable: false,
      esProponente: false,
      esAutorizante: false,
      esContraseñaTemporal: true,
      contraseña: 'temp480',
      unidad: {
        id: '677d15f51ea7df458590b5f9',
        nombre: 'Unidad C',
        code: 'C4',
      },
    },
    {
      _id: new ObjectId('67e2a2bb61e3836ad14d746e'),
      nombre: 'Miguel',
      apellido: 'Fernández Gómez',
      email: 'miguel.fernandez@example.com',
      telefono: '910567890',
      movil: '620567890',
      rol: {
        id: '677d160e6d98cb2a17428884',
        nombre: 'Usuario-Lectura',
      },
      esResponsable: false,
      esProponente: false,
      esAutorizante: false,
      esContraseñaTemporal: true,
      contraseña: 'temp480',
      unidad: {
        id: '677d15f51ea7df458590b5f9',
        nombre: 'Unidad C',
        code: 'C4',
      },
    },
  ],
  unidadProponentes: [
    { id: '677d1539c3cb57a1f7b57e77', nombre: 'Unidad E', code: 'E1' },
    { id: '677d15df0b8b68a6601e826a', nombre: 'Unidad B', code: 'B2' },
    { id: '677d15f51ea7df458590b5f9', nombre: 'Unidad C', code: 'C4' },
  ],
  roles: [
    {
      id: '677d15fd24c5646a1f7f69c0',
      nombre: 'Usuario-Administrador',
    },
    {
      id: '677d1609d7dfb3725db36e45',
      nombre: 'Usuario-Escritura',
    },
    {
      id: '677d160e6d98cb2a17428884',
      nombre: 'Usuario-Lectura',
    },
  ],
};
