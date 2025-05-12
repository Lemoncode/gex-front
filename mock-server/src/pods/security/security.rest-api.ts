import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { UserCredentials, UserSession } from '#common/models/index.js';
import { userRepository } from '#dals/user/index.js';
import { authenticationMiddleware } from './security.middlewares.js';

export const securityApi = Router();

securityApi
  .post('/login', async (req, res, next) => {
    try {
      const body = req.body as UserCredentials;
      const user = await userRepository.getUserByCredentials(body);

      if (user) {
        const userSession: UserSession = {
          id: user._id.toHexString(),
          rol: user.rol,
        };
        // TODO: MOVE secret to .env
        const token = jwt.sign(userSession, 'patata', {
          expiresIn: '1d',
          algorithm: 'HS256',
        });
        res.cookie('authorization', `Bearer ${token}`, {
          httpOnly: true,
        });
        res.sendStatus(204);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      next(error);
    }
  })
  .get('/whoami', authenticationMiddleware, async (req, res, next) => {
    try {
      const user = await userRepository.getUserById(req.userSession?.id);

      if (user) {
        res.status(200).send({ id: user._id.toHexString(), nombre: user.nombre, rol: user.rol });
      } else {
        res.clearCookie('authorization');
        res.sendStatus(401);
      }
    } catch (error) {
      next(error);
    }
  });
