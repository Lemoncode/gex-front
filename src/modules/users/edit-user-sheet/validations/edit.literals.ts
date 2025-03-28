const requiredMessage = 'Este campo es obligatorio.';

export const validationMessages = {
  nombre: { required: requiredMessage },
  email: {
    required: requiredMessage,
    notValid: 'Por favor, introduce un email válido.',
  },
  apellido: { required: requiredMessage },
  unidad: { required: requiredMessage },
  rol: { required: requiredMessage },
  contraseña: { required: requiredMessage },
  telefono: { required: requiredMessage },
  movil: { required: requiredMessage },
  esResponsable: { required: requiredMessage },
  esProponente: { required: requiredMessage },
  esAutorizante: { required: requiredMessage },
};
