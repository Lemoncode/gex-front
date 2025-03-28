import React from 'react';
import { Typography } from '@mui/material';
import { CheckboxForm } from '#common/components';
import { useWithTheme } from '#core/theme';
import * as innerClasses from '../edit-user-sheet.styles';

export const AditionalPermissions: React.FC = () => {
  const classes = useWithTheme(innerClasses);

  return (
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
  );
};
