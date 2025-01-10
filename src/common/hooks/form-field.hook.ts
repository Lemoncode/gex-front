import React from 'react';
import { useField } from 'formik';

interface Props {
  name?: string;
  value?: string | boolean | (string | number)[];
  error?: boolean;
  helperText?: string;
  onChange?: any;
  onBlur?: (event: React.FocusEvent<any>) => void;
}

export const useFormField = (props: Props) => {
  const [field, meta, helpers] = useField(props.name || '');
  const hasError = props.error || Boolean(meta && meta.touched && meta.error);
  const helperText = props.helperText ? props.helperText : meta?.error;
  const value = props.value !== undefined && props.value !== null ? props.value : field?.value;

  const handleChange = props.onChange || field?.onChange;
  const handleBlur = (event: React.FocusEvent<any>) => {
    if (props.onBlur) {
      props.onBlur(event);
    }
    if (field?.onBlur) {
      field?.onBlur(event);
    }
  };
  const customHelpers = {
    setValue: (value: any) => {
      props.onChange(null, value);
    },
  };

  return {
    hasError: hasError,
    helperText: hasError ? helperText : '',
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    field,
    meta,
    helpers: props.name ? helpers : customHelpers,
  };
};
