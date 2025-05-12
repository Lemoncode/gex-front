import { ENV } from '#core/constants/env.constants.js';
import cookieParser from 'cookie-parser';
import express from 'express';

export const createRestApiServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use((req, res, next) => {
    setTimeout(next, ENV.SIMULATED_DELAY || 2000);
  });

  return app;
};
