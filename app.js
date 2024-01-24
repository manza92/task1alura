let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function botonClicado() {
  alert("El boton fue clicado");
}

function mostrarAlerta() {
  let ciudad = prompt("Por favor ingresa el nombre de una ciudad de Brasil:");
  alert("Estuve en " + ciudad + " y me acorde de ti");
}
function mostrarMensaje() {
  alert("Amo JS");
}

function sumaDosNumeros() {
  let primerNumero = parseInt(prompt("Dijite el primer número"));
  let segundoNumero = parseInt(prompt("Dijite el sengundo número"));
  let resultado = primerNumero + segundoNumero;
  alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
}
