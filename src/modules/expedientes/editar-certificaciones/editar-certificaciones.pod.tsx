import React from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import { NavigationButton, Spinner } from '#common/components';
import { usePagination } from './use-pagination-hook';
import { TableComponent } from './components';
import { useColumns } from './editar-certificaciones.colums';
import * as classes from './editar-certificaciones.styles';

export const EditarCertificacionesPod: React.FC = () => {
  const { certificacionCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const columns = useColumns();
  const [selectedOption, setSelectedOption] = React.useState('opcion1');

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <div className={classes.header}>
        <TextField select label="Ordenar" value={selectedOption} onChange={handleSelectChange} variant="outlined">
          <MenuItem value="opcion1">Fecha de creación</MenuItem>
        </TextField>
        <div className="newCertificacionButton">
          <Button variant="contained" color="primary">
            Nueva certificación
          </Button>
        </div>
      </div>
      <TableComponent
        columns={columns}
        certificacionCollection={certificacionCollection.data}
        totalItems={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <section className={classes.buttonContainer}>
        <NavigationButton path="/expedientes" text="Volver" variant="text" />
        <Button type="submit" variant="contained">
          Guardar
        </Button>
      </section>
    </div>
  );
};
