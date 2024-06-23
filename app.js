//Variables
let input = document.querySelector(".container__input");
document.getElementById("numero").disabled = false;
document.getElementById("inicio").disabled = false;
document.getElementById("reiniciar").disabled = true;
let rango = prompt("Escribe el rango de números: ");
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

//Contenido HTML
txt('h1', `Juego del número secreto`);
txt('p', `Adivina el número entre 1 y ${rango}, en 5 intentos.`);