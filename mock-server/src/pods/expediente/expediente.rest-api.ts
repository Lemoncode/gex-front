import express from 'express';
import { expedienteRepository } from '#dals/expediente/expediente.repository.js';
import { mapExpedienteFromModelToApi, mapExpedienteListFromModelToApi } from './expediente.mappers.js';

export const expedienteApi = express.Router();

expedienteApi.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const expediente = await expedienteRepository.getExpedienteById(id);
    if (!expediente) {
      res.status(404).send({ message: 'Expediente no encontrado' });
      return;
    }
    res.send(mapExpedienteFromModelToApi(expediente));
  } catch (error) {
    next(error);
  }
});

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
