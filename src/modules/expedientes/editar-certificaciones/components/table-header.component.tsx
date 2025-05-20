import { Button, TextField, MenuItem } from '@mui/material';
import * as classes from './table-header.styles';
import React from 'react';

export const TableHeaderComponent = () => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption, setSelectedOption] = React.useState('opcion1');

  return (
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
  );
};
