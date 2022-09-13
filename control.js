let nombre = prompt("Hola! Bienvenid@ a la supermegaweb. Me dirías tu nombre?");
let advertencia = "";
let num1, num2;

while (nombre.length < 3 || !isNaN(nombre)) {
  nombre = prompt(
    "Mmm, ese nombre es muy corto o extraño. Probá otra vez, porfi."
  );
}

do {
  num1 = prompt(
    "Gracias! Ahora dame un número (si no ponés números, tendrás que hacerlo otra vez)."
  );
} while (isNaN(num1));

do {
  num2 = prompt(
    "Gracias again! Ahora, dame otro número (si no ponés números, tendrás que hacerlo otra vez)."
  );
} while (isNaN(num2));

if (nombre && num1 && num2) {
  alert(
    `La suma de los dos números ingresados es: ${
      parseInt(num1) + parseInt(num2)
    }`
  );

  document.getElementById("resultado").innerHTML =
    "El resultado de la suma de tus números más la cantidad de las letras de tu nombre es: <strong>" +
    (nombre.length + parseInt(num1) + parseInt(num2)) +
    "</strong>";
}
