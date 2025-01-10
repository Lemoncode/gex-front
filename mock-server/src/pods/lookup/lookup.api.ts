import { Router } from 'express';
import { lookupRepository } from '#dals/lookup/lookup.repository.js';

export const lookupApi = Router();

lookupApi
  .get('/unidad', async (req, res, next) => {
    try {
      const unidadesList = await lookupRepository.getUnidadList();

      res.send(unidadesList);
    } catch (error) {
      next(error);
    }
  })
  .get('/rol', async (req, res, next) => {
    try {
      const rolesList = await lookupRepository.getRolList();

      res.send(rolesList);
    } catch (error) {
      next(error);
    }
  })
  .get('/unidad-rol', async (req, res, next) => {
    try {
      const unidadRolList = await lookupRepository.getUnidadRolList();

      res.send(unidadRolList);
    } catch (error) {
      next(error);
    }
  });
