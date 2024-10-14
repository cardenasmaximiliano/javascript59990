//ingresar valores de productos a traves de un prompt
// que el usuario escriba terminar para finalizar la carga de productos.
// que esos valores se sumen y den un resultado en pantalla.

// cotizador de seguros de autos
// marca, modelo,version, año, accesorios(parametros

// marca => ford, chevrolet?

/**
 *  ford = 100
 *  chevrolet = 200 
 * audi 
 * bmw
 */

/*
 prompt = ingresa la marca (elegi entre bmw ford c)

prompt === "ford"{
    vale 100
}
sino (prompt === "chevrolet")
vale 200


dependiendo el año se reste por ejemplo 1% del valor estandar que le demos 2024, 
 2024 ==> 1000 



*/

//ingresar valores de productos a traves de un prompt
// que el usuario escriba "terminar" para finalizar la carga de productos.
// que esos valores se sumen y den un resultado en pantalla.

// let input;
// let total = 0;



// while(true){
//     input = prompt("ingresa el valor del producto o escribi terminar para finalizar")

//     if(input.toLowerCase() === 'terminar'){
//         break;
//     }

//     let valorProducto = parseFloat(input); //parseFloat, se usa cuando trabajamos con un punto flotante. 14.24

//     //isNaN => refiere a que lo que se esta ingresando no es un numero is not a number

//     if(!isNaN(valorProducto) && valorProducto >= 0){
        
//         total += valorProducto;
//         console.log(total);
//     } else{
//         alert("por favor ingresa numero correcto")
//     }
//     /*
//     la funcion isNaN verifica si el valor pasado no es un numero.
//     y el operador ! se utiliza en este caso para negar el resultado de isNaN. 
    
//     true = falso
//     falso = true
    
//     */
// }

// console.log("el valor total sumado de los productos es "+ total.toFixed(2));

/*
para convertir un dato de numero a string

podemos usar 

string(variableNumero)
variable.toString()


*/

/*
Realizá un programa que permita ingresar valores del mismo tipo para las variables num1 y num2. 
Una vez cargadas, mostrar ambas variables por pantalla,
 intercambiá sus valores (que lo cargado en num1 quede en num2, y viceversa) 
 y volvé a mostrarlas actualizadas. 

 */


 let variable1 = prompt("ingrese un valor");
let variable2 = prompt("ingrese otro valor");

console.log(variable1);
console.log(variable2);


let temporal = variable1; 

variable1 = variable2;

variable2 = temporal;


console.log("la variable1 ahora aloja "+variable1)
console.log("la variable1 ahora aloja "+ variable2)
