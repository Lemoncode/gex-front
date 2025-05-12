import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { UserCredentials, UserSession } from '#common/models/index.js';
import { userRepository } from '#dals/user/index.js';
import { authenticationMiddleware } from './security.middlewares.js';
import { ENV } from '#core/constants/env.constants.js';

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
        const token = jwt.sign(userSession, ENV.AUTH_SECRET, {
          expiresIn: '1d',
          algorithm: 'HS256',
        });
        res.cookie('authorization', `Bearer ${token}`, {
          httpOnly: true,
        });
        res.sendStatus(204);
      } else {
        res.sendStatus(401);
        res.clearCookie('authorization');
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
        res.sendStatus(401);
      }
    } catch (error) {
      next(error);
    }
  })
  .post('/logout', authenticationMiddleware, async (req, res, next) => {
    try {
      res.clearCookie('authorization');
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  });
