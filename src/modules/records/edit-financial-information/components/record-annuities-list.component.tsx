import * as innerClasses from './record-annuities-list.component.styles';

import { Button, Card, CardContent, IconButton, Typography } from '@mui/material';

import { AnualidadesRow } from '../record.type';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react';
import { useWithTheme } from '#core/theme/theme.hooks.ts';

interface Props {
  rows: AnualidadesRow[];
}

const AnnuitieListItem: React.FC<AnualidadesRow> = ({ year, amount, iva, symbol }) => {
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

export const AnnuitieList: React.FC<Props> = props => {
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
          <AnnuitieListItem key={row.id} {...row} />
        ))}
      </CardContent>
    </Card>
  );
};
