/* setTimeout(alert, 1000); // ejecuta despedirse pasados 1000ms (1 segundo)

function alert(){
    const div = document.querySelector('main');
    main.style.color = 'red';
}

*/

const mensaje = document.querySelector('#alertMensaje')

function mostrarMensaje(){
    const nombre = document.querySelector('#nombre').value;
    const comentario = document.querySelector('#comentario').value;
    console.log(nombre);
    console.log(comentario);
    if(nombre!= '' && comentario!=''){ // si no están vacíos
        mensaje.style.display = 'block'; // mostrar
        setTimeout(ocultarMensaje, 1000) // ejecuta despedirse pasados 1000ms (1 segundo);
    }
};

function ocultarMensaje(){
    mensaje.style.display = 'none';
}

const boton = document.querySelector('#btnEnviar');
boton.addEventListener('click', mostrarMensaje)









// ARROW FUNCTION
/*

const mostrarMensaje = () => {
    const nombre = document.querySelector('#nombre').value;
    const comentario = document.querySelector('#comentario').value;
    console.log(nombre);
    console.log(comentario);
    if(nombre!= '' && comentario!=''){ // si no están vacíos
        mensaje.style.display = 'block'; // mostrar
        setTimeout(ocultarMensaje, 1000) // ejecuta despedirse pasados 1000ms (1 segundo);
    }
};

const ocultarMensaje = () => {
    mensaje.style.display = 'none';
}

const boton = document.querySelector('#btnEnviar');
boton.addEventListener('click', mostrarMensaje)

*/