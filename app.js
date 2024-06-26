//Variables
let input = document.querySelector(".container__input");
document.getElementById("numero").disabled = false;
document.getElementById("inicio").disabled = false;
document.getElementById("reiniciar").disabled = true;
let rango;

//Validamos que solamente el usuario ingrese un valor numerico
do {
  rango = prompt("Escribe el rango de números: ");
} while (!/^\d+$/.test(rango));

if (rango !== null) {
  // Usa la variable 'rango' aquí
  //console.log("El rango ingresado es:", rango);
}

let numSecreto = Math.floor(Math.random() * rango) + 1;
input.setAttribute("max", rango);
let intentos = 1;
let maxIntentos = 5;
//console.log(`El número secreto es ${numSecreto}`);

//Funciones
function txt(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function jugar() {
  let numUsuario = parseInt(document.querySelector(".container__input").value);
  //console.log(typeof (numUsuario));
  //console.log(typeof (numSecreto));
  if (numUsuario == numSecreto) {
    txt('p', `Felicidades, has acertado, el número secreto es ${numSecreto}, en ${intentos} ${intentos > 1 ? "intentos" : "intento"}.`);
    document.getElementById("inicio").disabled = true;
    document.getElementById("reiniciar").disabled = false;
    document.getElementById("numero").disabled = true;
  } else {
    if (numUsuario > numSecreto) { 
      txt('p', `El número es menor`);
    } else { 
      txt('p', `El número es mayor`);
    }
    console.log(`Intento: ${intentos}`);
    intentos++;
    limpiar();
    if (intentos > maxIntentos) {
      txt('p', `Has agotado los intentos, el número secreto era ${numSecreto}.`);
      document.getElementById("inicio").disabled = true;
      document.getElementById("reiniciar").disabled = false;
      document.getElementById("numero").disabled = true;
    }
  }
  return;
}

function limpiar() {
  document.querySelector('#numero').value = "";
}

function reiniciar() {
  location.reload();
}

function soloNumeros(e) {
  var key = window.event ? e.keyCode : e.which;
  if (event.keyCode === 8 || event.keyCode === 46) {
    return true;
  } else if (key < 48 || key > 57) {
    return false;
  } else {
    return true;
  }
}

input.addEventListener("keypress", soloNumeros);

//Contenido HTML
txt('h1', `Juego del número secreto`);
txt('p', `Adivina el número entre 1 y ${rango}, en 5 intentos.`);