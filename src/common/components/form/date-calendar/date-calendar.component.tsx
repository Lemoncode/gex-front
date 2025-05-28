import React from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useField, useFormikContext } from 'formik';
import dayjs, { Dayjs } from 'dayjs';

interface DateCalendarFieldProps {
  name: string;
  label: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

export const DateCalendarField: React.FC<DateCalendarFieldProps> = props => {
  const { name, minDate, maxDate } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  let currentValueAsDayjs: Dayjs | null = null;
  if (field.value) {
    if (dayjs.isDayjs(field.value)) {
      currentValueAsDayjs = field.value;
    } else if (typeof field.value === 'string' && field.value.trim() !== '') {
      currentValueAsDayjs = dayjs(field.value, 'DD/MM/YYYY');
    }
  }

  return (
    <DateCalendar
      value={currentValueAsDayjs}
      onChange={(newValue: Dayjs | null) => {
        setFieldValue(name, newValue ? newValue.format('DD/MM/YYYY') : '');
      }}
      minDate={minDate}
      maxDate={maxDate}
    />
  );
};
