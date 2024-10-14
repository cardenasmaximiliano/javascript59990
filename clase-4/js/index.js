//funciones anonimas y funciones flecha
/*

    function nombre (parametros){
        //ejecutar 

        return
    }

    nombre(argumentos)

funcion anonima => no posee un nombre especifico. se define en el momneto, se puede asignar a una variable.

las funciones anonimas
se utilizan en callbacks de funciones de orden superior (mas adelante lo vemos)
En la creacion de modulos
Cuando sabemos que la funcion no la vamos a volver a utilizar


 */


// const SUMA = function(a,b){
//     return a + b;
// }

// console.log(suma(5,3));


/*
funcion de tipo flecha o funcion flecha

let suma = (a,b) => {
        return a + b
    }

sintaxis mucho mas concisa. (se utilizan mas que nada en funciones cortas)
no pose argumentos

no posee return lo implicito
y cuando la funcion se expresa en una sola linea no es necesario ponerle las {} si se expresa en mas de una linea
usamos llaves.

funciones normales vs funciones flecha

funcion flecha

sintaxis limpia y concisa
necesitamos mantener el contexto de this (objetos)
y cuando trabajamos con metodos de arrays (mas adelante)

funcion normal

hablamos de un contexto propio de this
cuando necesitamos acceder a argumentos.
cuando creamos un objeto (lo vemos ahora)
cuando son funciones complejos. 
*/

// const sumaDos = (a,b) => a + b;

// console.log(sumaDos(3,4));


/// objetos

/*
es algo que tiene varias caracteristicas => una coleccion de propiedades.
Donde cada propiedades se compone 
de una clave y un valor.
En javasCript nosotros lo utilizamos para almacenar datos y funciones. 


let nombre = {
    //coleccion de propiedades
    clave:valor,
    clave1: valor1,

}
*/

// let persona ={

//     nombre: "Pedro",
//     edad: "31",
//     estudios: "Programacion"
        // direccion: 
// }

// console.log(persona);
// console.log(persona.estudios)

// let productos={

//     id: 1,
//     nombre: "jarron Manuela",
//     material: "marmol",
//     color: "blaco, con camel",
//     precio: 15000
// }

// console.log(productos["nombre"])

// productos.color = "negro";

// console.log(productos)


//objetos constructores

/*
nos permite crear objetos a partir de plantillas, que se definen
a partir de una funcion. 
Instanciar y crear multiplies objetos.

1- tenemos que definir una funcion. que inicia las propiedades
del objeto. 
2- tenemos que pasarle informacion a traves de una palabra clave
llamada new

para reconocer un objeto constructor escribimos
su primera letra en mayuscula


this => es una palabra que refiere al contexto de ejecucion. 
el valor puede cambiar dependiendo de como invoquemos a la funcion

instanciar refiere al proceso de crear un objeto a partir de una clase.



*/

// function Auto(marca, modelo, anio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.anio = anio;
//     this.info = function(){
//         return `la marca del coche es ${this.marca}, su modelo es ${this.modelo}, año ${this.anio} `
//     }
// }


// let auto1 = new Auto(prompt("ingresa el dato"),prompt("ingresa el modelo"),prompt("ingresa el año"))
// let auto2 = new Auto('honda','civic',2020)
// console.log(auto1.info());
// console.log(auto2);

//clases son una manera mas moderna de hacer objetos. 

/*
es una manera mas facil en cuanto a la sintaxis y mas clara. 

las clases funciona de la siguiente manera: 
dentro de la clase se crea un constructor que nos sirve para inicializar las propiedaes del 
objeto

*/


// class Auto {
//     constructor(marca, modelo, anio){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }

//     info(){
//         return `${this.marca}, ${this.modelo}, ${this.anio}`
//     }

// }

// let auto1 = new Auto('honda','civic',2021);

// console.log(auto1)

class Persona {
    constructor(nombre, edad , calle, ciudad, codigoPostal, habilidades){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle,
            ciudad:ciudad,
            codigoPostal: codigoPostal
        }
        this.habilidades = habilidades;
    }

    mostrarInfo(){
        console.log(`nombre $this.nombre`)
    }
}


let juan = new Persona(
    "juan",
    30,
    "guido",
    "mar del plata",
    7600,
    "tocar el piano"

)

console.log(juan.direccion["calle"])