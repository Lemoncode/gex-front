import { ColumnDef } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';
import { Chip, Box } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { useWithTheme } from '#core/theme';
import { Record } from './records.vm';
import * as innerClasses from './records.styles';

export const useColumns = (): ColumnDef<Record>[] => {
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
          <Link to={`/records/${row.original.id}`} className={classes.link}>
            <VisibilityIcon />
          </Link>
          <Link to={`/edit-record/${row.original.id}`} className={classes.link}>
            <EditIcon />
          </Link>
          <DeleteIcon />
        </Box>
      ),
    },
  ];
};
