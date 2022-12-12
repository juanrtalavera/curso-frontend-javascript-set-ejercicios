'use strict';

let contador = 0;
function aumentarSegundos(){
    contador++;
    const segundos = document.querySelector('#segundos');
    segundos.innerText = contador;
}

function limpiarContador(){
    contador = 0;
    segundos.innerText = contador;
}

setInterval(aumentarSegundos, 1000);

const boton = document.querySelector('.btn');
boton.addEventListener('click', limpiarContador);

/* 

setInterval(saludar, 1000); // cada segundo saluda

let contador = 0
function saludar(){
    contador++;
    console.log('hola', contador)
}

*/