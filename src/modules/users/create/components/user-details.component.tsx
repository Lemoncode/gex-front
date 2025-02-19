import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff, ContentCopy } from '@mui/icons-material';
import { SelectForm, TextFieldForm } from '#common/components';
import { useWithTheme } from '#core/theme';
import { usePassword } from '../use-password.hook';
import { UnidadRolList } from '#core/api/lookups/unidad-rol';
import { handleCopyPassword } from '../create.business';
import * as innerClasses from '../create.styles';

interface Props {
  unidadRolList: UnidadRolList;
  contraseña?: string;
}

export const UserDetails: React.FC<Props> = props => {
  const { unidadRolList, contraseña } = props;
  const classes = useWithTheme(innerClasses);
  const { showPassword, toggleShowPassword } = usePassword();

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
      <div className={classes.row}>
        <TextFieldForm
          name="contraseña"
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          slotProps={{
            input: {
              endAdornment: (
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            },
          }}
        />
        <IconButton onClick={() => handleCopyPassword(contraseña || '')} className={classes.icon}>
          <ContentCopy />
        </IconButton>
      </div>
    </div>
  );
};
