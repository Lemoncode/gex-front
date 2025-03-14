import * as innerClasses from './expedientes.styles';

import { Box, Chip } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Visibility as VisibilityIcon } from '@mui/icons-material';

import { ColumnDef } from '@tanstack/react-table';
import { Expediente } from './expedientes.vm';
import { Link } from '@tanstack/react-router';
import { useWithTheme } from '#core/theme';

export const useColumns = (): ColumnDef<Expediente>[] => {
  const classes = useWithTheme(innerClasses);

  return [
    { accessorKey: 'id', header: 'idv' },
    { accessorKey: 'clase', header: 'Clase', cell: ({ row }) => <Chip label={row.original.clase} /> },
    { accessorKey: 'titulo', header: 'Título' },
    {
      accessorKey: 'adjudicataria',
      header: 'Adjudicataria',
    },
    { accessorKey: 'estado', header: 'Estado', cell: ({ row }) => <Chip label={row.original.estado} /> },
    {
      accessorKey: 'commands',
      header: 'Comandos',
      cell: ({ row }) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Link to={`/expedientes/${row.original.id}`} className={classes.link}>
            <VisibilityIcon />
          </Link>
          <Link to={`/editar-expediente/${row.original.id}`} className={classes.link}>
            <EditIcon />
          </Link>
          <DeleteIcon />
        </Box>
      ),
    },
  ];
};
