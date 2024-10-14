/**
 * 
 
abstracion  => es la manera en la cual podemos reducir la complejidad y permitir una implementacion
y diseño eficiente de datos. 

1- vamos evitar el duplicado de codigo. 
2- poder crear multiples instancias con una sola abstraccion.
3- encapsular datos.
4- evitamos codigo de bajo nivel

 */

// let dato1 = 1;
// let dato2 = 2;

// let datosSumar = dato1 + dato2 


// function sumar(a,b){
//     return a + b
// }

// console.log(sumar(3,5))

//funciones de orden superior

/*
es una funcion que toma una o mas funciones como argumentos o devulve una funcion como resultado



*/


//una funcion puede contener dentro otras funciones. 


// function asignarOperacion (operacion){
//     if( operacion === 'sumar'){
//         return function (numero1, numero2){
//            return  numero1 + numero2

//              }
//     }else if(operacion === 'restar'){
//         return (numero1, numero2) => numero1 - numero2
//     }
// }

// let sumar = asignarOperacion ('sumar');
// let resta = asignarOperacion ('resta');

// console.log(sumar());


/* function que tome 2 numeros, operacion*/ 

//es para que se entienda que una funcion padre
// puede llamar a otras funciones y ejecutar cosas. 


// function operar(num1, num2, operacion){
//     return operacion(num1, num2)

// }


// function suma (a,b){
//     return a + b;
// }

// function resta (a,b){
//     return a-b
// }
// function multiplicar(a,b){
//     return a* b
// }

// function dividir (a,b){
//     return a / b
// }


// console.log(operar(5,3,multiplicar))
// console.log(operar(5,3,resta))

//forEach 

//

// const frutas = ['manzana','pera','kiwi','naranja'];

/*
for each es una funcion que se utiliza para iterar sobre elementos de un array. Y permite ejecutar
una funcion especifica para cada elemento del array

parametros 

1- elemento = elemento actual de array que se procesa
2- indice (opcional) el indice actual del elemento
3- arreglo(opcional)
*/

// frutas.forEach(function(frutas,indice){

//     console.log(`${indice} : ${frutas}`)

// })


// const numeros = [2,4,6,8];
// let suma = 0;

// numeros.forEach(numero => {
//     suma += numero
// })

// console.log(suma)

//



// const NOMBRES = []

// PERSONAS.forEach(persona => {
//     NOMBRES.push(persona.nombre)
// })

// console.log(NOMBRES);

//FIND => devolver el primer elemento de un arreglo que cumpla con una condicion dada, 
/*

si no cumple ningun elemento con la condicion devuelve undefined
*/

// const numeros = [5,6,7,8]

// const primerPar = numeros.find(num => num % 2 === 0);
// console.log(primerPar)


// const PERSONAS = [

//     {
//         nombre:'pedro',
//         edad: 25
//     },
//     {
//         nombre:'juan',
//         edad: 30
//     },
//     {
//         nombre:'maria',
//         edad: 19
//     },
//     {
//         nombre:'cristian',
//         edad: 18
//     },
//     {
//         nombre:'cristofer',
//         edad: 16
//     }

// ]

// const NOMBRE_BUSCADO = "maria";

// let estudianteEncotrado = PERSONAS.find();

// console.log(estudianteEncotrado)

/*
filter => nos va a devolver un nuevo arreglo, con todos los elementos que pasen 
las condiciones dadas por el programador. 


*/


let edad = [15,20,22,16,40];

let MayoresDeEdad = edad.filter(edad => edad >= 18 && edad <= 30);

console.log(MayoresDeEdad);


/*

some => verifica si un elemento en el arreglo cumple o no con una condicion dada.
Devuleve true si al menos un elemento pasa la prueba y false si no lo pasan.


*/


// const numeros = [1,3,5];

// const par = numeros.some(num => num % 2 === 0);
// console.log(par )

/*
map => nos devuelve un nuevo array con los resultados de aplicar una funcion sobre los elementos
del array original


*/

const PRECIOS_CARRITO = [100,200,150,300];

// let precioAumentos = PRECIOS.map(precio => precio *1.5);

// console.log(precioAumentos);

/*
Reduce => reduce un array a una unica expresion.

*/


const totalCarrito = PRECIOS_CARRITO.reduce((acum, num)=> acum + num,2);

// console.log(totalCarrito)


// let totalVentas = 0;

// for (let i = 0; i < PRECIOS_CARRITO.length; i++){
//     totalVentas += PRECIOS_CARRITO[i];
// }

// console.log(totalVentas)

/**
    sort => me permite ordenar un array, siempre y cuando se declar una funcion de comparacion


 */

 const numeros = [5,4,10,25,30];
// esto en cuanto a string
numeros.sort((z,x)=> z - x); //se ordena el codigo de manera creciente
// numeros.sort((a,b)=> b - a); se ordena el codigo de manera decreciente
 console.log(numeros)


const string = ["manzana","Banana","anana","kiwi"]

string.sort((a,b)=> b.localeCompare(a));
console.log(string)

