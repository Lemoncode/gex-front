import React from 'react';
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { calculateEndDate } from '../utils';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { useFormikField } from '../hook';
import * as innerClasses from './periodo-ejecucion.styles';
import { PERIOD_TYPES } from '../constans';

export const PeriodoEjecucionSection: React.FC = () => {
  const classes = useWithTheme(innerClasses);
  const { values, setFieldValue, touched, errors } = useFormikField();

  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      setFieldValue('startDate', date);
      if (values.executionPeriod) {
        const newEndDate = calculateEndDate(date, values.executionPeriod);
        setFieldValue('endDate', newEndDate);
      }
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      setFieldValue('endDate', date);
    }
  };

  return (
    <section className={classes.periodSection}>
      <Typography variant="h6">Período de ejecución</Typography>
      <div className={classes.periodContainer}>
        <div className={classes.periodSelector}>
          <TextField
            className={classes.timeSelector}
            id="periodoEjecucion"
            name="periodoEjecucion"
            label="Período de ejecución*"
            value={values.executionPeriod}
          />

          <Select
            className={classes.timeSelector}
            labelId="periodTypes"
            id="periodTypes"
            name="periodTypes"
            value={values.executionPeriodType}
          >
            {PERIOD_TYPES.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={classes.periodSelector}>
          <DatePicker
            label="Fecha de inicio"
            value={values.startDate}
            onChange={handleStartDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                error: touched.startDate && Boolean(errors.startDate),
              },
            }}
          />

          <div className={classes.divider}>—</div>

          <DatePicker
            label="Fecha de fin"
            value={values.endDate}
            onChange={handleEndDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                error: touched.endDate && Boolean(errors.endDate),
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};
