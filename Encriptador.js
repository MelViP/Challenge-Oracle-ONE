//variables donde almacenamos la informacion de los espacios de texto o los textareas existentes
const textArea = document.querySelector(".input");
const resultado = document.querySelector(".output");



//  ENCRIPTACION


//almacenar llaves de encriptacion dentro de una matriz
var llavesEncriptado = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


//evento para que al click en boton encriptar la funcion encriptar ocurra
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    resultado.value = textoEncriptado;

    textArea.value = ""; //limpiar campo cuando aparece resultado desencriptado
    resultado.style.backgroundImage = "none";

    // Ocultar el texto de descripción
    const textoResultado = document.getElementById("textoResultado");
    textoResultado.classList.add("oculto");

    //hacer que boton copiar apareza
    const copiarBoton = document.getElementById("copiar");
    copiarBoton.classList.remove("oculto");

    // Mostrar el botón reiniciar
    const reiniciarBoton = document.getElementById("reiniciar");
    reiniciarBoton.classList.remove("oculto");
}

//funcion para encriptar el texto input

function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < llavesEncriptado.length; i++){
        if(stringEncriptado.includes(llavesEncriptado[i][0])){
           stringEncriptado = stringEncriptado.replaceAll(llavesEncriptado[i][0], llavesEncriptado[i][1]);
        }
    }
    return stringEncriptado;
}




// DESENCRIPTACION

//almacenar llaves de encriptacion dentro de una matriz
var llavesDesencriptado = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];


//evento para que al click en boton encriptar la funcion encriptar ocurra

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(resultado.value); //cambiando funcion para que desencripte resultado de encriptacion
    resultado.value = textoDesencriptado;
      
    textArea.value = ""; //limpiar campo cuando aparece resultado encriptado
    resultado.style.backgroundImage = "none";

    // Ocultar el texto de descripción
    const textoResultado = document.getElementById("textoResultado");
    textoResultado.classList.add("oculto");

    //hacer que boton copiar apareza
    const copiarBoton = document.getElementById("copiar");
    copiarBoton.classList.remove("oculto");

    // Mostrar el botón reiniciar
    const reiniciarBoton = document.getElementById("reiniciar");
    reiniciarBoton.classList.remove("oculto");
    
}

//funcion para encriptar el texto input

function desencriptar(stringDesencriptado) {
    //hacer minusculas
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < llavesDesencriptado.length; i++) {

        if (stringDesencriptado.includes(llavesDesencriptado[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(llavesDesencriptado[i][0], llavesDesencriptado[i][1]);
        }
    }
  
  return stringDesencriptado;
}

//copiar al portapepeles boton

const copiarBoton = document.getElementById("copiar");
copiarBoton.addEventListener("click", copiarAlPortapapeles);

function copiarAlPortapapeles() {
    const resultado = document.querySelector(".output");
    resultado.select();
    document.execCommand("copy");

    // Cambiar el texto del botón a "Copiado"
    const copiarBoton = document.getElementById("copiar");
    copiarBoton.textContent = "Copiado";
}


//boton de recargar pagina

const reiniciarBoton = document.getElementById("reiniciar");
reiniciarBoton.addEventListener("click", reiniciarPagina);

function reiniciarPagina() {
  location.reload(); // Recargar la página
}
