import React from 'react';
import { Form, Formik } from 'formik';
import { TextFieldForm } from '#common/components';
import { useCreateExpedienteContext, PresupuestoBase } from '#modules/expedientes/core/providers';
import { StepNavigation } from '../step-navigation.component';
import { presupuestoBaseValidations } from '../validations';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputAdornment,
  Paper,
  TableFooter,
  Typography,
  Box,
  MenuItem,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import * as classes from './steps.styles';

export const PresupuestoBaseStep: React.FC = () => {
  const { formData, onNextStep } = useCreateExpedienteContext();

  const handleSubmit = (values: PresupuestoBase) => {
    onNextStep('presupuestoBase', values);
  };

  const createRow = (id: number, year: number, application: string, cuantity: string) => ({
    id,
    year,
    application,
    cuantity,
  });

  const rows = [
    createRow(1, 2021, '22 227.00', '19.000 €'),
    createRow(2, 2022, '22 227.00', '19.000 €'),
    createRow(3, 2023, '22 227.00', '19.000 €'),
  ];
  return (
    <Formik
      initialValues={formData.presupuestoBase}
      enableReinitialize={true}
      onSubmit={handleSubmit}
      validate={presupuestoBaseValidations.validateForm}
    >
      {() => (
        <Form className={classes.form}>
          <Box className={classes.fields}>
            <TextFieldForm
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                },
              }}
              type="number"
              name="amount"
              label="Cantidad"
            />
            <TextFieldForm
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                },
              }}
              type="number"
              name="amount"
              label="Porcentaje IVA"
            />
            <TextFieldForm
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                },
              }}
              type="number"
              name="amount"
              label="Cantidad"
            />
            <TextFieldForm
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">€</InputAdornment>,
                },
              }}
              type="number"
              name="amount"
              label="Cantidad"
            />
          </Box>
          <Box>
            <Typography variant="h6" mt="16px" mb="16px">
              ANUALIDADES
            </Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className={classes.rowHeader}>
                  <TableCell>Ejercicio</TableCell>
                  <TableCell>Aplicación presupuestaria</TableCell>
                  <TableCell>Importe</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id} className={classes.rowsBody}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.application}</TableCell>
                    <TableCell>{row.cuantity}</TableCell>
                    <TableCell>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter sx={{ bgcolor: '#fafafa' }}>
                <TableRow>
                  <Typography pt={2} pl={2}>
                    Añadir anualidad
                  </Typography>
                </TableRow>

                <Stack direction="row" spacing={2} className={classes.rowFooter}>
                  <TextFieldForm type="text" name="ejercicio" label="Ejercicio" size="small" />

                  <TextFieldForm name="label" label="Label" select size="small">
                    <MenuItem>Label 1</MenuItem>
                    <MenuItem>Label 2</MenuItem>
                    <MenuItem>Label 3</MenuItem>
                  </TextFieldForm>

                  <TextFieldForm
                    slotProps={{
                      input: {
                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                      },
                    }}
                    type="number"
                    name="importe"
                    label="Importe"
                    size="small"
                  />
                  <Button
                    endIcon={<SaveIcon fontSize="inherit" />}
                    variant="contained"
                    size="medium"
                    className={classes.button}
                    fullWidth
                  >
                    GUARDAR
                  </Button>
                </Stack>
              </TableFooter>
            </Table>
          </TableContainer>

          <StepNavigation />
        </Form>
      )}
    </Formik>
  );
};
