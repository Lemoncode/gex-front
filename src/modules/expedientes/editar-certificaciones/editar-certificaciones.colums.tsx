import * as innerClasses from './editar-certificaciones.styles';

import { Box } from '@mui/material';
import { Edit as EditIcon, Visibility as VisibilityIcon } from '@mui/icons-material';

import { ColumnDef } from '@tanstack/react-table';
import { Certificacion } from './editar-certificaciones.vm';
import { Link } from '@tanstack/react-router';
import { useWithTheme } from '#core/theme';

export const useColumns = (): ColumnDef<Certificacion>[] => {
  const classes = useWithTheme(innerClasses);

  return [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'numeroFactura', header: 'Número de factura' },
    { accessorKey: 'fechaFactura', header: 'Fecha de factura' },
    { accessorKey: 'periodoGasto', header: 'Periodo de gasto' },
    { accessorKey: 'importe', header: 'Importe' },
    { accessorKey: 'fechaCertificacion', header: 'Fecha de certificación' },
    { accessorKey: 'certifica', header: 'Certifica' },
    {
      accessorKey: 'acciones',
      header: 'Acciones',
      cell: ({ row }) => (
        <Box display="flex" alignItems="center" gap={2}>
          <Link to={`/certificaciones/${row.original.id}`} className={classes.link}>
            <VisibilityIcon sx={{ color: 'gray' }} />
          </Link>
          <Link to={`/editar-certificacion/${row.original.id}`} className={classes.link}>
            <EditIcon sx={{ color: 'gray' }} />
          </Link>
        </Box>
      ),
    },
  ];
};
