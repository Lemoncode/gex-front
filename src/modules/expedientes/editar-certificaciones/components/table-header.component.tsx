import { Button, TextField, MenuItem } from '@mui/material';
import * as classes from './table-header.styles';
import React from 'react';
import { CrearCertificacionPod } from './crear-certificacion';

export const TableHeaderComponent = () => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption, setSelectedOption] = React.useState('opcion1');

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.header}>
      <CrearCertificacionPod isOpen={isOpen} handleClose={handleClose} />
      <TextField select label="Ordenar" value={selectedOption} onChange={handleSelectChange} variant="outlined">
        <MenuItem value="opcion1">Fecha de creación</MenuItem>
      </TextField>
      <div className="newCertificacionButton">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Nueva certificación
        </Button>
      </div>
    </div>
  );
};
