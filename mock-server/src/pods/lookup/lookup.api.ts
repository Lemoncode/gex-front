import { Router } from 'express';
import { lookupRepository } from '#dals/lookup/lookup.repository.js';
import { mapRoleListFromModelToApi, mapUnidadProponenteListFromModelToApi } from './lookup.mappers.js';

export const lookupApi = Router();

lookupApi.get('/roles', async (req, res, next) => {
  try {
    if (Object.keys(req.query).length > 0) {
      return res.status(400).send({ message: 'Error in the request' });
    }

    const roles = await lookupRepository.getRoles();

    res.status(200).send(mapRoleListFromModelToApi(roles));
  } catch (error) {
    next(error);
  }
});

lookupApi.get('/unidad-proponentes', async (req, res, next) => {
  try {
    if (Object.keys(req.query).length > 0) {
      return res.status(400).send({ message: 'Error in the request' });
    }

    const proponentes = await lookupRepository.getUnidadProponente();
    res.status(200).send(mapUnidadProponenteListFromModelToApi(proponentes));
  } catch (error) {
    next(error);
  }
});
