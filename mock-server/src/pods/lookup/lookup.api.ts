import { Router } from 'express';
import { lookupRepository } from '#dals/lookup/lookup.repository.js';
import { mapRoleListFromModelToApi, mapUnidadesListFromModelToApi } from './lookup.mappers.js';

export const lookupApi = Router();

lookupApi.get('/roles', async (req, res, next) => {
  try {
    const roles = await lookupRepository.getRoles();
    res.status(200).send(mapRoleListFromModelToApi(roles));
  } catch (error) {
    next(error);
  }
});

lookupApi.get('/unidades', async (req, res, next) => {
  try {
    const proponentes = await lookupRepository.getUnidades();
    res.status(200).send(mapUnidadesListFromModelToApi(proponentes));
  } catch (error) {
    next(error);
  }
});

lookupApi.get('/unidades-roles', async (req, res, next) => {
  try {
    const { roles, unidades } = await lookupRepository.getUnidadesRoles();
    res
      .status(200)
      .send({ roles: mapRoleListFromModelToApi(roles), unidades: mapUnidadesListFromModelToApi(unidades) });
  } catch (error) {
    next(error);
  }
});
