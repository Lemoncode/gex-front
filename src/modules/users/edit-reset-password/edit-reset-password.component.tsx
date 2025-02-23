import React from 'react';
import * as innerClasses from './edit-reset-password.styles';
import { useWithTheme } from '#core/theme';
import { Button, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff, ContentCopy } from '@mui/icons-material';
import { usePassword } from '../create/use-password.hook';

interface Props {
  id: string;
}

export const EditResetPasswordComponent: React.FC<Props> = props => {
  const { id } = props;

  const { showPassword, toggleShowPassword } = usePassword();
  const classes = useWithTheme(innerClasses);
  return (
    <div className={classes.root}>
      <div className={classes.sectionContainer}>
        <h6>Usuario: ${id}</h6>
        <div className={classes.passwordFieldContainer}>
          <TextField
            name="contraseña"
            label="Nueva Contraseña"
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
          <IconButton onClick={() => {}} className={classes.icon}>
            <ContentCopy />
          </IconButton>
        </div>

        <div className={classes.buttonContainer}>
          <Button type="submit" variant="contained">
            Resetear Clave de Usuario
          </Button>
        </div>
      </div>
    </div>
  );
};
