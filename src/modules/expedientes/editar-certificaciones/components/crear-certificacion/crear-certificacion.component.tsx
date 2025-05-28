import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  DialogActions,
  Button,
  Divider,
} from '@mui/material';
import React from 'react';
import { Certificacion, createEmptyCertificacion } from '../../editar-certificaciones.vm';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components/index.ts';
import { DateCalendarField } from '#common/components/index.ts';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import { crearCertificacionValidations } from '../validations/crear-certificacion.validations';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  onSubmit: (values: Certificacion) => void;
}

export const CrearCertificacion: React.FC<Props> = props => {
  const { isOpen, handleClose, onSubmit } = props;

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pb: '0' }}>Nueva certificación</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={theme => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ pt: '0' }}>
        <Formik
          initialValues={createEmptyCertificacion()}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={crearCertificacionValidations.validateForm}
        >
          {({ values }) => (
            <Form>
              <Box sx={{ display: 'flex', gap: '20px', marginBottom: 2 }}>
                <TextFieldForm name="id" label="ID" type="text" required />
                <TextFieldForm name="numeroFactura" label="Número de factura" type="text" required />
                <TextFieldForm
                  name="fechaFactura"
                  label="Fecha de factura"
                  type="date"
                  required
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography>Periodo de gasto</Typography>
                <Box gap={4}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <TextFieldForm
                      name="periodoGastoInicio"
                      label="Fecha de inicio"
                      type="text"
                      required
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                        htmlInput: {
                          readOnly: true,
                        },
                      }}
                    />
                    <span> - </span>
                    <TextFieldForm
                      name="periodoGastoFin"
                      label="Fecha de fin"
                      type="text"
                      required
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                        htmlInput: {
                          readOnly: true,
                        },
                      }}
                    />
                  </Box>
                  <Box display="flex" gap={1}>
                    <DateCalendarField
                      name="periodoGastoInicio"
                      label="Fecha de inicio"
                      maxDate={values.periodoGastoFin ? dayjs(values.periodoGastoFin, 'DD/MM/YYYY') : undefined}
                    />
                    <Divider orientation="vertical" flexItem />
                    <DateCalendarField
                      name="periodoGastoFin"
                      label="Fecha de fin"
                      minDate={values.periodoGastoInicio ? dayjs(values.periodoGastoInicio, 'DD/MM/YYYY') : undefined}
                    />
                  </Box>
                </Box>
              </Box>
              <TextFieldForm name="certifica" label="Certifica" required />
            </Form>
          )}
        </Formik>
        <DialogActions>
          <Button variant="text" color="primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
