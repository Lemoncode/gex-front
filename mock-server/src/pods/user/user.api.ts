import { Router } from 'express';
import { userRepository } from '#dals/user/user.repository.js';
import { mapUserFromApiToModel, mapUserListFromModelToApi } from './user.mappers.js';
import { Usuario } from './user.api-model.js';

export const userApi = Router();

userApi
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
  });
