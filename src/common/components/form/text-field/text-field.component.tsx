import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { useFormField } from '#common/hooks';

export const TextFieldForm: React.FC<TextFieldProps> = props => {
  const { id, ...otherProps } = props;

  const { value, hasError, helperText, onChange, onBlur } = useFormField({
    name: props.name,
    value: props.value as string,
    error: props.error,
    helperText: props.helperText as string,
    onChange: props.onChange,
    onBlur: props.onBlur,
  });

  return (
    <MuiTextField
      {...otherProps}
      id={id || props.name}
      name={props.name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={hasError}
      helperText={helperText}
      fullWidth
    />
  );
};
