import { Router } from 'express';
import { userRepository } from '#dals/user/user.repository.js';
import {
  mapUserFromModelToApi,
  mapUserListFromModelToApi,
  mapUserFromApiToModel,
  mapUserFromApiToModelUpdate,
} from './user.mappers.js';
import { Usuario, UsuarioActualizado } from './user.api-model.js';

export const userApi = Router();

userApi
  .get('/:email/exists', async (req, res, next) => {
    try {
      const { email } = req.params;
      const isAnExistingEmail = await userRepository.isAlreadyEmailOnDB(email);
      res.send({ isAnExistingEmail });
    } catch (error) {
      next(error);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const userList = await userRepository.getUserList(page, pageSize);
      res.send(mapUserListFromModelToApi(userList));
    } catch (error) {
      next(error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newUser: Usuario = req.body;

      const modelUser = mapUserFromApiToModel(newUser);
      const createdUser = await userRepository.createUser(modelUser);

      res.status(201).send(createdUser);
    } catch (error) {
      next(error);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userRepository.getUserById(id);
      res.send(mapUserFromModelToApi(user));
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const usuarioActualizado: UsuarioActualizado = req.body;
      const modelUser = mapUserFromApiToModelUpdate(usuarioActualizado);
      const estaActualizado = await userRepository.actualizarUsuario(id, modelUser);

      res.status(201).send(estaActualizado);
    } catch (error) {
      next(error);
    }
  });
