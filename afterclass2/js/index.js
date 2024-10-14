//Escribe una función que imprima los números del 1 al 100. 
//Usa un bucle for para hacerlo.

// function imprimirNumeros(){

//     for( let i = 1; i<= 100; i++ ){
//         console.log("el que se imprime es " + i)
//     }


// }

// imprimirNumeros();

//Crea una función que reciba el año actual y el año de nacimiento
// de una persona, y calcule su edad. Si la persona aún no ha nacido,
// la función debe devolver un mensaje indicando que el año de nacimiento no es válido.


function calcularEdad(actual, nacimiento){
    if(nacimiento > actual){
        return "el año de nacimiento no es valido"
    } 
        return actual - nacimiento;
    
}

let anioActual = 2024;
let miNacimiento = 1992;

let edad = calcularEdad(anioActual, miNacimiento); 
console.log(edad)


function aumentarPrecio(precioActual, cantidad){
    const nuevoPrecio = precioActual + cantidad; 
    return nuevoPrecio;
}


let precioActual =200;