import { FieldValidationFunctionAsync } from '@lemoncode/fonk';

const validatorType = 'CHECK_PASSWORD_CHARACTER';
let defaultMessage = 'Contraseña debe tener al menos 8 caracteres';

export const passwordValidation: FieldValidationFunctionAsync = async fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;

  const succeeded = typeof value === 'string' && value.length >= 8;

  return {
    type: validatorType,
    succeeded: succeeded,
    message: succeeded ? '' : (message as string),
  };
};
