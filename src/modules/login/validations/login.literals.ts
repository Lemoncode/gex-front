const requiredMessage = 'Este campo es obligatorio.';

export const validationMessages = {
  email: {
    required: requiredMessage,
    notValid: 'Por favor, introduce un email válido.',
    notAvailable: 'Email no disponible en el sistema, introduce otro email.',
  },
  contraseña: { required: requiredMessage },
};
