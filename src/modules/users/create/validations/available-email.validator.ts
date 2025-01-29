import { FieldValidationFunctionAsync } from '@lemoncode/fonk';
import * as api from '../api';

const validatorType = 'CHECK_EMAIL_AVAILABILITY';
let defaultMessage = 'Email no disponible, ya está asignado a otro usuario.';

export const availableEmailValidation: FieldValidationFunctionAsync = async fieldValidatorArgs => {
  const { value, message = defaultMessage } = fieldValidatorArgs;
  const { isAnExistingEmail } = await api.isAlreadyExistingEmail(value);

  return {
    type: validatorType,
    succeeded: !isAnExistingEmail,
    message: isAnExistingEmail ? (message as string) : '',
  };
};
