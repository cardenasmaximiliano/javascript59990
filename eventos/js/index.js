
//en la segunda sintaxis se llama a la etiqueta o atributo en javascript.
//y se utiliza la palabra recervada on y el tipo de evento. una vez que se llama, se debe ejecutar
//una funcion donde le vamos a decir que queremos que haga el evento.

// const miBoton = document.getElementById('miBoton');

// .on = es un metodo que nos sirve a nosotros para asignar eventos + el tipo de evento
// miBoton.onclick = function(){

//     alert("se ejecuto el evento de la segunda manera")

// }

// la otra manera de ejecutar eventos es a traves de una sintaxis llamada addEventListener
/**
    es una forma mas flexible y la mas recomendada para gestionar eventos. 

    addEventListener(es el tipo de evento, es poner la funcion)
*/


// const botonDos = document.getElementById('miBoton');

// //adventListener => es un metodo de js que se utiliza para asignar eventos. nos permite ejecutar funciones, cuando 
// //ocurre un evento especifico

// botonDos.addEventListener('click', function(){
//     alert("ejecucion del evento con la tercera sintaxis")
// })

const botonNoche = document.getElementById('modoNoche');

botonNoche.addEventListener('click',function(){

    //classList => propiedad que nos permite manipular las clases en css y crearlas.
    //toggle => nos permite añadir o quitar en este caso la clase
    document.body.classList.toggle('modo-noche');

    //contains => es un metodo, que se utiliza en las propiedades de classlist devuelve contains un valor de 
    //verdadero o falso
    if(document.body.classList.contains('modo-noche')){
        botonNoche.textContent = "Modo dia";
    }else{
        botonNoche.textContent= "Modo Noche"
    }

})

//eventos de raton, evento de teclado, eventos pensados para formularios
/*
evento de raton =

mouseover: se va a activar cuando el puntero del raton este sobre el elemento
mouseout: se va activar cuando el evento del raton salga del elemento.

*/

const pasarRaton = document.getElementById('pasarRaton');

// pasarRaton.addEventListener('mouseover', function(){

//     pasarRaton.style.backgroundColor = 'lightgreen';
// })

// pasarRaton.addEventListener('mouseout', function(){
//     pasarRaton.style.backgroundColor = 'lightBlue'

// })

/*
mousedown => se dispara cuando un boton del raton es presionado
mouseup = cuando el click del raton es soltado.

*/

// pasarRaton.addEventListener('mousedown',function(){
//     pasarRaton.textContent = 'apretaste el div';
//     pasarRaton.style.backgroundColor = 'lightgreen';
// })
// pasarRaton.addEventListener('mouseup',function(){
//     pasarRaton.textContent = 'soltaste el div';
//     pasarRaton.style.backgroundColor = 'lightblue';
// })

//eventos de teclado
/*

keydown => se dispara cuando se preciona una tecla
keyup => se dispara cuando se suelta

keypress => pero esto ya no se usa(se dispara cuando una tecla es precionada)
*/

const estado = document.getElementById('estado');

document.addEventListener('keydown',function(event){
    //key es una propiedad del evento de teclado, que nos sirve para obtener el valor de la tecla que fue presionada.

    estado.textContent = `tecla presionada: ${event.key}`
    estado.style.color = 'blue'
})

document.addEventListener('keyup',function(event){
    //key es una propiedad del evento de teclado, que nos sirve para obtener el valor de la tecla que fue presionada.

    estado.textContent = `tecla soltada: ${event.key}`
    estado.style.color = 'green'
})

//eventos de formulario

//submit => se activa cuando el formulario se envia. y nos sirve para validar datos


// const formulario = document.getElementById('formulario');

// formulario.addEventListener('submit',function(evento){
//     const nombreInput = document.getElementById('nombre').value
//     if(nombreInput === ''){
//         alert('por favor, ingresa un nombre')
//         evento.preventDefault() //es un metodo que evitar que el formulario se envie
//     }
// })

//change => se activa cuando el valor de un elemento de un formulario cambia y se pierde foco. 


const colorSeleccionado = document.getElementById('color');

colorSeleccionado.addEventListener('change',function(evento){
    console.log(`seleccionaste ${evento.target.value}`)
})