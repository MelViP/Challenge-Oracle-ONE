

const btnCopiar = document.querySelector(".copiar");
btnCopiar.addEventListener("click", copiar = () => {
var contenido = document.querySelector(".texto-resultado").textContent;
navigator.clipboard.writeText(contenido);
console.log("hola");
}) 

