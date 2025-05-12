import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { UserSession } from '#common/models/index.js';
import { ENV } from '#core/constants/index.js';

const verify = (token: string, secret: string): Promise<UserSession> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, userSession: UserSession) => {
      if (error) {
        reject(error);
      }

      if (userSession) {
        resolve(userSession);
      } else {
        reject();
      }
    });
  });

export const authenticationMiddleware: RequestHandler = async (req, res, next) => {
  try {
    const [, token] = req.cookies.authorization?.split(' ') || [];
    const userSession = await verify(token, ENV.AUTH_SECRET);
    req.userSession = userSession;
    next();
  } catch (error) {
    console.error(error);
    res.clearCookie('authorization');
    res.sendStatus(401);
  }
};
