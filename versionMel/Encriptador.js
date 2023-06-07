//variables donde almacenamos la informacion de los espacios de texto o los textareas existentes
const textArea = document.querySelector(".input");
const resultado = document.querySelector(".output");



//  ENCRIPTACION


//almacenar llaves de encriptacion dentro de una matriz
let llavesEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


//evento para que al click en boton encriptar la funcion encriptar ocurra
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  resultado.value = textoEncriptado;

  textArea.value = ""; //limpiar campo cuando aparece resultado desencriptado
  resultado.style.backgroundImage = "none";
  getElementbyClass(descripcionResultado).shift 


}

//funcion para encriptar el texto input

function encriptar(stringEncriptado) {
  stringEncriptado = stringEncriptado.toLowerCase();
  
  for (let i = 0; i < llavesEncriptado.length; i++) {
    if (stringEncriptado.includes(llavesEncriptado[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(llavesEncriptado[i][0], llavesEncriptado[i][1]);
    }
  }
  
  return stringEncriptado;
}



// DESENCRIPTACION

//almacenar llaves de encriptacion dentro de una matriz
let llavesDesencriptado = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];


//evento para que al click en boton encriptar la funcion encriptar ocurra
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  resultado.value = textoDesencriptado;

  textArea.value = ""; //limpiar campo cuando aparece resultado encriptado
  resultado.style.backgroundImage = "none";

}

//funcion para encriptar el texto input

function desencriptar(stringDesencriptado) {
  stringDesencriptado = stringDesencriptado.toLowerCase();
  
  for (let i = 0; i < llavesDesencriptado.length; i++) {
    if (stringDesencriptado.includes(llavesDesencriptado[i][0])) {
      stringDesencriptado = stringDesencriptado.replaceAll(llavesDesencriptado[i][0], llavesDesencriptado[i][1]);
    }
  }
  
  return stringDesencriptado;
}

//COPIAR AL PORTAPAPELES

//llamar variable del boton copiar

const botonCopiar = document.querySelector('.copiar');

//llamar el textarea del texto resultado

const textarea = document.querySelector('.output');


function portapapeles() {
    try {
      // Seleccionar el contenido del textarea
      const textarea = document.getElementById('myTextarea');
      textarea.select();
  
      // Copiar el texto al portapapeles
      const exito = document.execCommand('copy');
  
      // Verificar si la copia fue exitosa
      if (exito) {
        console.log('Texto copiado al portapapeles');
      } else {
        console.error('Error al copiar al portapapeles');
      }
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  }
  