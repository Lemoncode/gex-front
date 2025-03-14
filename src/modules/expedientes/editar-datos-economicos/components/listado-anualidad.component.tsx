import * as innerClasses from './listado-anualidad.styles';

import { Button, Card, CardContent, IconButton, Typography } from '@mui/material';

import { Anualidad } from '../editar-expediente.type';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

interface Props {
  rows: Anualidad[];
}

const AnualidadItem: React.FC<Anualidad> = ({ ano: year, monto: amount, iva, simbolo: symbol }) => {
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.ListItemContainer}>
      <span>{year}</span>
      <span>{`${amount.toLocaleString()}${symbol}`}</span>
      <span>{`${iva.toLocaleString()}${symbol}`}</span>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export const ListadoAnualidad: React.FC<Props> = props => {
  const { rows } = props;
  const classes = useWithTheme(innerClasses);
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <div className={classes.tableHeader}>
          <Typography variant="caption" fontWeight={'bold'}>
            Anualidades
          </Typography>
          <Button variant="outlined" className={classes.newButton}>
            <FolderIcon />
            <span>Nueva</span>
          </Button>
        </div>

        <div className={classes.TableBody}>
          <Typography variant="caption" fontWeight={'bold'}>
            Ejercicio
          </Typography>
        </div>
        {rows.map(row => (
          <AnualidadItem key={row.id} {...row} />
        ))}
      </CardContent>
    </Card>
  );
};
