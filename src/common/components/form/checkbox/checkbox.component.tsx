import { useFormField } from '#common/hooks';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, CheckboxProps } from '@mui/material';
import React from 'react';

type Props = CheckboxProps & {
  label?: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
};

export const CheckboxForm: React.FunctionComponent<Props> = props => {
  const { className, label, labelPlacement, fullWidth = true, error, helperText, ...checkboxProps } = props;
  const {
    value,
    hasError,
    helperText: currentHelperText,
    onChange,
    onBlur,
  } = useFormField({
    name: props.name,
    value: props.checked,
    error,
    helperText,
    onChange: props.onChange,
    onBlur: props.onBlur,
  });

  return (
    <FormControl error={hasError} fullWidth={fullWidth} className={className}>
      <FormControlLabel
        control={
          <Checkbox
            {...checkboxProps}
            id={props.id || props.name}
            name={props.name}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
      />

      {hasError && <FormHelperText>{currentHelperText}</FormHelperText>}
    </FormControl>
  );
};
