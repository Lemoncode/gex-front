import { ENV } from '#core/constants/env.constants.js';
import express from 'express';

export const createRestApiServer = () => {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    setTimeout(next, ENV.SIMULATED_DELAY || 2000);
  });

  return app;
};
