const requiredMessage = 'Este campo es obligatorio.';

export const validationMessages = {
  nombre: { required: requiredMessage },
  email: {
    required: requiredMessage,
    notValid: 'Por favor, introduce un email válido.',
    notAvailable: 'Email no disponible en el sistema, introduce otro email.',
  },
  apellido: { required: requiredMessage },
  unidad: { required: requiredMessage },
  rol: { required: requiredMessage },
  contraseña: { required: requiredMessage },
};
