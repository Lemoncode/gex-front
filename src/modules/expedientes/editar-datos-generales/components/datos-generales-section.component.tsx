import React from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { useFormikField } from '../hook';
import { CLASSES, RESPONSIBLES, STATES, UNITS } from '../constans';
import * as innerClasses from './datos-generales-section.styles';

export const DatosGeneralesSection: React.FC = () => {
  const classes = useWithTheme(innerClasses);
  const { values, errors, touched, handleChange, handleBlur } = useFormikField();

  const responsibleOptions = React.useMemo(() => {
    const options = [...RESPONSIBLES];
    if (values.responsible && !RESPONSIBLES.includes(values.responsible)) {
      options.unshift(values.responsible);
    }
    return options;
  }, [values.responsible]);

  return (
    <section className={classes.section}>
      <Typography variant="h6">Datos Generales</Typography>
      <div className={classes.stack}>
        <div className={classes.stackItem}>
          <FormControl fullWidth error={touched.class && Boolean(errors.class)}>
            <InputLabel id="class-label">Clase</InputLabel>
            <Select
              labelId="class-label"
              id="class"
              name="class"
              value={values.class}
              label="Clase"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {CLASSES.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="title"
            name="title"
            label="Título del expediente"
            multiline
            rows={4}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            className={classes.inputField}
          />

          {values.title && (
            <Typography variant="caption" align="right">
              {values.title.length}/100
            </Typography>
          )}
        </div>

        <div className={classes.stackItem}>
          <div className={classes.stackItemRow}>
            <FormControl error={touched.state && Boolean(errors.state)} className={classes.inputField}>
              <InputLabel id="state-label">Estado</InputLabel>
              <Select
                labelId="state-label"
                id="state"
                name="state"
                value={values.state}
                label="Estado"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {STATES.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="numExpediente"
              name="numExpediente"
              label="Num. Expediente"
              value={values.numExpediente}
              className={classes.inputField}
              disabled
            />

            <TextField
              id="numSorolla2"
              name="numSorolla2"
              label="Num. Sorolla 2"
              value={values.numSorolla2}
              className={classes.inputField}
              disabled
            />
          </div>

          <FormControl fullWidth error={touched.proposingUnit && Boolean(errors.proposingUnit)}>
            <InputLabel id="proposingUnit-label">Unidad Proponente</InputLabel>
            <Select
              labelId="proposingUnit-label"
              id="proposingUnit"
              name="proposingUnit"
              value={values.proposingUnit}
              label="Unidad Proponente"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {UNITS.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth error={touched.responsible && Boolean(errors.responsible)}>
            <InputLabel id="responsible-label">Responsable</InputLabel>
            <Select
              labelId="responsible-label"
              id="responsible"
              name="responsible"
              value={values.responsible}
              label="Responsable"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {responsibleOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </section>
  );
};
