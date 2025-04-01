import React from 'react';
import { Typography } from '@mui/material';
import { SelectForm, TextFieldForm } from '#common/components';
import { useWithTheme } from '#core/theme';
import { UnidadRolList } from '#core/api/lookups/unidad-rol';
import * as innerClasses from '../edit-user-sheet.styles';

interface Props {
  unidadRolList: UnidadRolList;
  contraseña?: string;
}

export const UserDetails: React.FC<Props> = props => {
  const { unidadRolList } = props;
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.sectionContainer}>
      <Typography variant="h6" fontWeight={600}>
        Datos
      </Typography>
      <div className={classes.row}>
        <TextFieldForm name="nombre" label="Nombre" />
        <TextFieldForm name="apellido" label="Apellidos" className={classes.apellidos} />
        <TextFieldForm name="email" label="Email" />
      </div>
      <div className={classes.row}>
        <TextFieldForm name="telefono" label="Teléfono fijo" />
        <TextFieldForm name="movil" label="Teléfono móvil" />
        <SelectForm label="Unidad" name="unidad" options={unidadRolList.unidades} />
        <SelectForm label="Rol" name="rol" options={unidadRolList.roles} />
      </div>
    </div>
  );
};
