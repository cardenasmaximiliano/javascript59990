/*
Objeto math => que nos permite a nosotros a traves de propiedades y metodos, realizar operaciones 
complejas.

*/


/*
MIN Y MAX

devuelven el valor minimo  o maximo respectivamente entre los numeros proporcionados como argumentos.

*/

let minimo = Math.min(5,10,-3,7);

console.log(minimo)

let maximo = Math.max(5,10,4,20);
console.log(maximo)


//ceil => cuando queremos redondear hacia arriba un numero decimal.

let numero = 4.5;

let redondeo = Math.ceil(numero);

console.log(redondeo)

//floor => nos permite redondear un numero hacia abajo.

let redondeoAbajo = Math.floor(numero);
console.log(redondeoAbajo)

//round => cuando queremos que se redondee al numero entero mas cercano.
//si tenemos un numero que esta junsto en la mitad 0.5 => siempre se redonde para arriba

let redondeoJs = Math.round(numero)
console.log(redondeoJs)

//RANDOM => genera un numero pseudoaleatorio que va entre el 0 y el 1;

let aleatorio = Math.random();

console.log(aleatorio)


//queremos que los numeros vayan entre el 1 y el 10

let numerosEntreUnoYDiez = Math.round(Math.random()*(10))+1;

console.log(numerosEntreUnoYDiez)

// redondear precios.

let precioOriginales = [

    {
        nombre:"jordan",
        precio: 750.30
    },
    {
        nombre:"Nike",
        precio: 850.75
    },
    {
        nombre:"adidas",
        precio: 345.1
    },
    {
        nombre:"new balance",
        precio: 235.30
    },
];

//extraer los precio del arreglo.

let precios = precioOriginales.map( producto => producto.precio);

//solamente busca el precio mas alto.
let precioMaximo = Math.max(...precios);

//esto busca el producto(el objeto entero) con el precio mas alto
let productoPrecioMaximo = precioOriginales.find(producto => producto.precio === precioMaximo);

console.log(productoPrecioMaximo);


// let preciosRedondeados = precioOriginales.map(precios => Math.floor(precios.precio));

// console.log(preciosRedondeados)

// let sumaTotal = preciosRedondeados.reduce((acumulador, precio)=> acumulador + precio,0)

// console.log(sumaTotal)


// let sumaTotal = precioOriginales.reduce((acumulador,precios)=> acumulador + Math.floor(precios.precio),0);

// console.log(sumaTotal)

/*

pow => elevar un numero a una potencia especifica

sqrt => sacar la raiz cuadrada de un numero

let elavado = Math.pow(base, exponente)

*/

// let elevado = Math.pow(3,5);

// console.log(elevado)

// let raiz = Math.sqrt(16);

// console.log(raiz);


/*
la clase date, se utiliza para trabajar sobre fechas y horas

crear 
manipular
formatear 

/* calcular cosas relacionadas con el tiempo */



let fechaActual = new Date()
console.log(fechaActual)


//año, mes, dia, horas, minutos, segundos, milisegundos
/*
los meses inician en 0 al 11

enero = 0

diciembre = 11

*/


let fechaPropia = new Date(2020,4,21,21,19,6);
console.log(fechaPropia);

/*
metodos en date que nos permiten obtener la informacion de las fecha

esto se hace con la palabra get al inicio
*/

console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth());
console.log(fechaActual.getDate());
console.log(fechaActual.getDay()); // 0 es domingo 6 es sabado
console.log(fechaActual.getHours())
console.log(fechaActual.getMinutes())
console.log(fechaActual.getSeconds())


/*
Si nosotros queremos establecer o setear un dato

set => y seteamos la informacion
*/

let fecha = new Date();
fecha.setFullYear(2025);
fecha.setMonth(11);
fecha.setDate(13);
fecha.setHours(23);
fecha.setMinutes(12)
fecha.setSeconds(59)
console.log(fecha);

// diferencia entre dos fechas




function calcularDiferenciasEnDias(fechaInicio,fechaFinal){

    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    const diferenciaEnMiliSegundos = fechaFinal - fechaInicio;

    return Math.round (diferenciaEnMiliSegundos / unDiaEnMilisegundos);

}

let fechaInicio = new Date (2024,9,1);
let fechaFinal = new Date (2024,9,31);

let diferencia = calcularDiferenciasEnDias(fechaInicio, fechaFinal);

console.log(diferencia);

