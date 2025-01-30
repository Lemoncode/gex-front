import { ColumnDef } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';
import { Chip, Box } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { useWithTheme } from '#core/theme';
import { Usuario } from './users.vm';
import * as innerClasses from './users.styles';

export const useColumns = (): ColumnDef<Usuario>[] => {
  const classes = useWithTheme(innerClasses);

  return [
    { accessorKey: 'nombre', header: 'Nombre' },
    { accessorKey: 'apellido', header: 'Apellidos' },
    {
      accessorKey: 'unidad',
      header: 'Unidad',
      cell: ({ row }) => <Chip label={row.original.unidad} />,
    },
    { accessorKey: 'email', header: 'Email' },
    {
      accessorKey: 'commands',
      header: 'Comandos',
      cell: ({ row }) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Link to={`/users/${row.original.id}`} className={classes.link}>
            <VisibilityIcon />
          </Link>
          <Link to={`/edit-user/${row.original.id}`} className={classes.link}>
            <EditIcon />
          </Link>
          <DeleteIcon />
        </Box>
      ),
    },
  ];
};
