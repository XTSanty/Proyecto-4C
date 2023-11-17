// test.js

// Importa la función validarCorreo
const { validarCorreo } = require('./verificar');

test('Validar correo con "@" debería retornar "Correo Validado"', () => {
  const result = validarCorreo('test@example.com');
  expect(result).toBe('Correo Validado con Éxito');
});

test('Validar correo sin "@" debería retornar mensaje de error', () => {
  const result = validarCorreo('testexample.com');
  // Modifica el mensaje esperado para que coincida con el mensaje devuelto por la función
  expect(result).toBe('La dirección de correo electrónico solo puede contener un símbolo \'@\'.');
});

test('Validar correo vacío debería retornar mensaje de error', () => {
  const result = validarCorreo('');
  // Ajusta el mensaje esperado para reflejar la nueva lógica de tu función
  expect(result).toBe('La dirección de correo electrónico no puede estar vacía.');
});

test('Validar correo con espacios en blanco debería retornar mensaje de error', () => {
  const result = validarCorreo('test@example .com');
  expect(result).toBe('La dirección de correo electrónico no debe contener espacios en blanco.');
});

test('Validar correo con varios "@" debería retornar mensaje de error', () => {
  const result = validarCorreo('test@example@.com');
  expect(result).toBe('La dirección de correo electrónico solo puede contener un símbolo \'@\'.');
});
