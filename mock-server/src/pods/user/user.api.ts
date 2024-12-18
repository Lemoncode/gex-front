import { Router } from 'express';
import { userRepository } from '#dals/user/user.repository.js';
import { mapUserFromModelToApi, mapUserListFromModelToApi } from './user.mappers.js';

export const userApi = Router();

userApi.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const userList = await userRepository.getUserList(page, pageSize);

    res.send(mapUserListFromModelToApi(userList));
  } catch (error) {
    next(error);
  }
});

userApi.post('/', async (req, res, next) => {
  try {
    const userToCreate = req.body;
    const newUser = await userRepository.createUser(userToCreate);

    res.status(201).send(mapUserFromModelToApi(newUser));
  } catch (error) {
    next(error);
  }
});

userApi.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userModel = await userRepository.getUserById(userId);

    if (!userModel) {
      return res.status(404).send({ message: `User with ID ${userId} not found` });
    }

    const userApiModel = mapUserFromModelToApi(userModel);
    res.send(userApiModel);
  } catch (error) {
    next(error);
  }
});

userApi.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userToUpdate = req.body;

    const existingUser = await userRepository.getUserById(userId);
    if (!existingUser) {
      return res.status(404).send({ message: `User with ID ${userId} not found` });
    }

    const updatedUser = await userRepository.updateUserById(userId, userToUpdate);

    return res.status(200).send({
      message: 'User successfully updated',
      user: mapUserFromModelToApi(updatedUser),
    });
  } catch (error) {
    next(error);
  }
});
