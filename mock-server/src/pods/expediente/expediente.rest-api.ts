import express from 'express';
import { expedienteRepository } from '#dals/expediente/expediente.repository.js';
import { mapExpedienteListFromModelToApi } from './expediente.mappers.js';

export const expedienteApi = express.Router();

expedienteApi.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const expedienteList = await expedienteRepository.getExpedienteList(page, pageSize);
    res.send(mapExpedienteListFromModelToApi(expedienteList));
  } catch (error) {
    next(error);
  }
});
