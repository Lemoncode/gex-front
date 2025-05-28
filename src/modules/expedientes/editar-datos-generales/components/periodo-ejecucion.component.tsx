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

  React.useEffect(() => {
    if (values.startDate && values.executionPeriod && values.executionPeriodType) {
      const numericPeriod = +values.executionPeriod;
      const newEndDate = calculateEndDate(values.startDate, numericPeriod, values.executionPeriodType);
      setFieldValue('endDate', newEndDate);
    }
  }, [values.startDate, values.executionPeriod, values.executionPeriodType, setFieldValue]);

  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      setFieldValue('startDate', date);
    }
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setFieldValue('executionPeriod', value);
    }
  };

  const handlePeriodTypeChange = (e: any) => {
    setFieldValue('executionPeriodType', e.target.value);
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
            type="number"
            value={values.executionPeriod}
            onChange={handlePeriodChange}
            error={touched.executionPeriod && Boolean(errors.executionPeriod)}
          />

          <Select
            className={classes.timeSelector}
            labelId="periodTypes"
            id="periodTypes"
            name="periodTypes"
            value={values.executionPeriodType || ''}
            onChange={handlePeriodTypeChange}
            error={touched.executionPeriodType && Boolean(errors.executionPeriodType)}
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
            disabled
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
