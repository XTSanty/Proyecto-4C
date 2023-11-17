// verificar.js

console.log("GRUPO 4C");
console.log("Juan Diego Jauregui Jaras");
console.log("Sergio Fabian Emerich Benites Santiago");

function validarCorreo(correo) {
  if (correo.trim() === '') {
    alert("FAVOR DE INGRESAR UN CORREO ELECTRÓNICO.");
    return "La dirección de correo electrónico no puede estar vacía.";
  }

  if (correo.includes(' ')) {
    alert("FAVOR DE ELIMINAR ESPACIOS EN BLANCO DEL CORREO ELECTRÓNICO.");
    return "La dirección de correo electrónico no debe contener espacios en blanco.";
  }

  const countAtSymbol = correo.split('@').length - 1;
  if (countAtSymbol !== 1) {
    alert("FAVOR DE INGRESAR UN SOLO SÍMBOLO '@' EN EL CORREO ELECTRÓNICO.");
    return "La dirección de correo electrónico solo puede contener un símbolo '@'.";
  }

  alert("Correo Validado con Éxito");
  return "Correo Validado con Éxito";
}

// Exporta la función para que pueda ser utilizada en otras partes del código
module.exports = { validarCorreo };
