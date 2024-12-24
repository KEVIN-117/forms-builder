export enum FieldType {
  // Campos de texto
  SHORT_ANSWER = 'short_answer', // Respuesta corta
  PARAGRAPH = 'paragraph', // Párrafo

  // Campos de selección
  MULTIPLE_CHOICE = 'multiple_choice', // Opción múltiple
  CHECKBOX = 'checkbox', // Casillas de verificación
  DROPDOWN = 'dropdown', // Lista desplegable

  // Campos de clasificación y escalas
  LINEAR_SCALE = 'linear_scale', // Escala lineal
  RATING = 'rating', // Calificación

  // Cuadrículas
  MULTIPLE_CHOICE_GRID = 'multiple_choice_grid', // Cuadrícula de opción múltiple
  CHECKBOX_GRID = 'checkbox_grid', // Cuadrícula de casillas de verificación

  // Campos de entrada avanzada
  DATE = 'date', // Fecha
  TIME = 'time', // Hora
  FILE_UPLOAD = 'file_upload', // Carga de archivos
  TEXT = 'text', // Texto
  NUMBER = 'number', // Número
  EMAIL = 'email', // Correo electrónico
  PHONE_NUMBER = 'phone_number', // Número de teléfono
  URL = 'url', // Enlace/URL

  // Campos personalizados
  COLOR_PICKER = 'color_picker', // Selector de color
  SIGNATURE = 'signature', // Firma electrónica
  RANGE = 'range', // Selector de rango
}
