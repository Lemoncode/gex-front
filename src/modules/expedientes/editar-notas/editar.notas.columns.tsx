import { Nota } from "./editar.notas.vm";
import { Box, IconButton } from "@mui/material";
import { Visibility as VisibilityIcon, Edit as EditIcon } from "@mui/icons-material";
import { ColumnDef } from "@tanstack/react-table";

export const useColumns = (): ColumnDef<Nota>[] => {

  return [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'nota', header: 'Nota' },
    { accessorKey: 'fecha', header: 'Fecha' },
    { accessorKey: 'autor', header: 'Autor' },
    {
      accessorKey: 'acciones',
      header: 'Acciones',
      cell: () => (
        <Box display="flex" justifyContent="center">
          <IconButton>
            <VisibilityIcon
              sx={{
                color: 'gray'
              }}
            />
          </IconButton>
          <IconButton>
            <EditIcon
              sx={{
                color: 'gray'
              }}
            />
          </IconButton>
        </Box>
      ),
    }
  ]
}
