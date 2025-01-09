import { Lookup } from '#common/models';
import { useFormField } from '#common/hooks/index.ts';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import * as innerClasses from './select.styles';

type Props = SelectProps & {
  options: Lookup[];
  helperText?: string;
  allowEmpty?: boolean;
};

export const SelectForm = (props: Props) => {
  const { className, id, options, label, variant, allowEmpty, helperText, ...otherProps } = props;

  const labelId = `${props.name}-label`;

  const {
    value,
    hasError,
    helperText: currentHelperText,
    onChange,
    onBlur,
  } = useFormField({
    name: props.name,
    value: props.value as string,
    error: props.error,
    helperText,
    onChange: props.onChange,
    onBlur: props.onBlur,
  });

  return (
    <FormControl variant={variant} error={hasError} fullWidth className={className}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        {...otherProps}
        id={id || props.name}
        name={props.name}
        labelId={labelId}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {allowEmpty && <MenuItem className={innerClasses.emptyValue} value=""></MenuItem>}
        {options.map(item => (
          <MenuItem key={JSON.stringify(item)} value={item.id}>
            {item.nombre}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{currentHelperText}</FormHelperText>}
    </FormControl>
  );
};
