/**
 * un array es una lista, o estructura de datos que se utiliza para almacenar una coleccion de valores.
 * Los valores array pueden ser de cualquier tipo, numeros, cadena de texto, objetos y podemos tener un array de
 * ntro de otro array.
 * funciones.
 * 
 * let array = []; //un array vacio sin informacion.
 * el corchete es con alt 91 
 * 
 * los arrays SIEMPRE INICIAN CON EL INDICE (POSICION) 0
 * 
 * 
 * por consola podemos ver una palabrita llamada length => que nos dice la longitud del array.
 * 
() => funciones
{} => objetos
[] => arrays 
* 
 */

// let strings = ["numero","perro","jaime", "tyrion"];
// let numeros = [1,2,3,4,5];
// let boolean = [true, false,true,false]
// let mixto = [1, "numero",false, 2]

// let pokemon = [

//     {
//         pokemon: "pikachu",
//         tipo: "electrico"
//     },
//     {
//         pokemon:"eve",
//         tipo: "normal"
//     },
//     {
//         pokemon: "lugia",
//         tipo: "legendario"
//     }

// ]



// console.log(strings)
// console.log(numeros)
// console.log(boolean)
// console.log(mixto)
// console.log(pokemon)
// console.log(strings[2])

// for(let i = 0; i < pokemon.length; i++){

//     // console.log(pokemon[i]) esto me devuelvo el objeto entero
//     console.log(pokemon[i].pokemon)
// }

//length no es un metodo, es una propiedad. Sirve para darnos o devolvernos la cantidad de elementos 
//que posee el array.

/**
 * metodos en array son funciones incorporadas en js que nos van a permitir realizar algunas operaciones.
 * De manera sencillas y rapidas. 
 * 
 * 
 * 
*/

/*


*/



/*
metodo push => nosp ermite agregar uno o mas elementos al final del array
*/

// strings.push("Juan Pablo Andueza","pepe");

// console.log(strings)

/**
 * metodo pop => me va a eliminar un elemento o varios del array siempre y cuando esten al final
 * 
 * 
 */

// strings.pop();
// console.log(strings)

/*
metodo unshift() => agregar elementos al inicio del array
metodo shift() => elimina elementos al inicio del array

*/

// strings.unshift("brian sarmiento");
// console.log(strings)
// strings.shift()
// console.log(strings)


/*
splice => se utiliza para modificar el array eliminando
agregando o reemplazando elementos en posiciones especificas.

elimina elementos del array original
y estos se pueden asignar dentro de uno nuevo

*/

// let strings = ["numero","perro","jaime", "tyrion"];


// let miNuevoArray = strings.splice(1,3);

// console.log(miNuevoArray);
// console.log(strings);



/*
el metodo joins nos convierte los elementos de un array

en una cadena de texto y los une a traves de un separador

*/
let strings = ["numero","perro","jaime", "tyrion"];
let pasoAString = strings.join(" ");

console.log(pasoAString)

/*
metodo indexOf => nos sirve para buscar el primer elemento de un array
que se repita o no.
nos devuelve el indice si existe 
y si no existe devuelve un -1

*/

let frutas = ["manzana","pera","banana","Manzana","manzana"];


let indice = frutas.indexOf("Manzana");

console.log("el indice de manzana es: "+ indice);

/**
 * includes => me dice si un elemento existe o no en el array
 * nos devulve un booleano
 * 
 * 
 */

let existe = frutas.includes("frutilla");
console.log(existe)

/*
reverse => nos ayuda a invertir el orden de los elementos del array
*/

let frutaInvetida = frutas.reverse();
console.log(frutaInvetida)


/*
concat => se utiliza para combinar dos o mas arrays en uno nuevo

*/


let array1 = [1,2,3,4]
let array2 = [5,6,7,8]
let array3 = [9,10,11,12]

let arrayCombinado = array1.concat(array2,array3)

console.log(arrayCombinado)


/*
slice => se utiliza para extraer una porcion de un array y devolverlo
en un nuevo array. no modicia el array original

*/

let alumnos = ["franco","stefany","natalia","jonathan"];

// let aprobadas = alumnos.slice(1,3)

// console.log(aprobadas)
// console.log(alumnos)

// let desaprobados = [alumnos[0], alumnos[alumnos.length-1]];

// console.log(desaprobados)

let listaNueva = [].concat(alumnos.slice(0,1), alumnos.slice(-2));
console.log(listaNueva);

/*

for.. of => es una estructura de control de flujo para recorrer y operar
en elmeentos de un iterable. 


*/

// const lenguajes = ["ingles","italiano","espaniol","frances"];

// for (const lenguaje of lenguajes){
//     console.log(lenguaje);
// }

// carrito de productos que suman el total de los precios de los productos
const productos = [
    {
        producto: "camiseta",
        precio: 20
    },
    {
        producto: "camiseta",
        precio: 20
    },
    {
        producto: "camiseta",
        precio: 20
    },
    {
        producto: "zapatillas",
        precio: 30
    },
    {
        producto: "pantalones",
        precio: 40
    },

]

let precioTotal = 0;

for (const PEPE of productos){

    precioTotal += PEPE.producto;


}

console.log("el precio del carrito total es : "+ precioTotal);