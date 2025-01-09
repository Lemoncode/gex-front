import React from 'react';
import { Form, Formik } from 'formik';
import { Button, IconButton, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TextFieldForm, SelectForm, CheckboxForm, NavigationButton } from '#common/components';
import { useWithTheme } from '#core/theme';
import { usePassword } from './use-password.hook';
import { createEmptyUsuario, UnidadRolList, Usuario } from './edit.vm';
import * as innerClasses from './edit.styles';

interface Props {
  unidadRolList: UnidadRolList;
  onSubmit: (values: Usuario) => void;
}

export const EditUser: React.FC<Props> = props => {
  const { unidadRolList, onSubmit } = props;
  const classes = useWithTheme(innerClasses);
  const { password, showPassword, onCopyPassword, toggleShowPassword } = usePassword();

  return (
    <div className={classes.root}>
      <Typography variant="h3">Nombre de usuario</Typography>
      <Formik initialValues={createEmptyUsuario()} enableReinitialize={true} onSubmit={onSubmit}>
        {() => (
          <Form className={classes.form}>
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
                  value={password}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <IconButton onClick={toggleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    },
                  }}
                />
                <IconButton onClick={onCopyPassword} className={classes.icon}>
                  <ContentCopyIcon />
                </IconButton>
              </div>
            </div>
            <div className={classes.sectionContainer}>
              <Typography variant="h6" fontWeight={600}>
                Permisos adicionales
              </Typography>
              <div className={classes.checkboxContainer}>
                <CheckboxForm name="esResponsable" label="Responsable" fullWidth={false} />
                <CheckboxForm name="esProponente" label="Proponente" fullWidth={false} />
                <CheckboxForm name="esAutorizante" label="Autorizante" fullWidth={false} />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button type="submit" variant="contained">
                Guardar
              </Button>
              <NavigationButton path="/users" text="Cancelar" variant="text" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
