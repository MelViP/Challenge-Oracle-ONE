//variables donde almacenamos la informacion de los espacios de texto o los textareas existentes
const textArea = document.querySelector(".input");
const resultado = document.querySelector(".output");

//almacenar llaves de encriptacion dentro de una matriz
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//evento para que al click en boton encriptar la funcion encriptar ocurra
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  resultado.value = textoEncriptado;
}

//funcion para encriptar el texto input

function encriptar(stringEncriptado) {
  stringEncriptado = stringEncriptado.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return stringEncriptado;
}

console.log(matrizCodigo);
