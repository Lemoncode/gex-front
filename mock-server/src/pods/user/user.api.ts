import { Router } from 'express';
import { userRepository } from '#dals/user/user.repository.js';
import { mapUserListFromModelToApi } from './user.mappers.js';

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
