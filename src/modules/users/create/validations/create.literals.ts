const defaultRequiredField = { required: 'Este campo es obligatorio.' };

export const validationMessages = {
  nombre: defaultRequiredField,
  email: {
    ...defaultRequiredField,
    notValid: 'Por favor, introduce un email válido.',
    notAvailable: 'Email no disponible en el sistema, introduce otro email.',
  },
  apellido: defaultRequiredField,
  unidad: defaultRequiredField,
  rol: defaultRequiredField,
  contraseña: defaultRequiredField,
};
