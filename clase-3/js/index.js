/**
 * ciclo por conteo
 * 
 * - sabemos cuantas veces necesitamos que itere el codigo
 * - usa algo llamado contador
 * - y el ejemplo clasico es el ciclo for
 * 
 * ciclo por condicion
 * 
 * - no sabemos cuantas veces se va a repetir, pero sabemos que si se cumple
 * una condicion X frena.
 * 
 * - los ejemplos clasicos de los ciclos condicionales son el while y el do while
 * 
*/


/**ciclo por conteo
 
operadores importantes => incremento / decremento

 cuando queremos incrementar algo  => i++ =>  i + 1
 cuando queremos decrementar algo => i-- => i - 1


 */

//i ++ => post-incremento el valor de la variable
//se va a incrementar despues de que su utilice
// la expresion actual

//  let x = 5;

//  let y = x++;
 
//  console.log(y);
// console.log(x);

//pre-incremento => ++i, el valor de la variable
//incrmeenta antes que se utilice.

// let a = 6;

// let b = ++a;

// console.log(b);


//ciclo for => nosotros le vamos a decir cuantas veces queremos que se ejecute
//el ciclo

/*
ciclo por conteo 

posee 3 partes => 

    inicializacion (desde): nos va a dar la variable de control inicial. se expresa con una
     variable
    condicion (hasta): se verifica antes de cada iteracion, si la condicion es verdadera 
    el ciclo
    continua si es falta termina
    actualizacion, es la parte donde se genera el incremento o decremento de la variable

    for(inicializacion ; condicion ; actualizacion){

    //bloque de codigo a repetir

}

    */ 

//vamos a imprimir 10 veces un mensaje 

// for(let i =1; i <= 10; i++){

    //inicializacion => se ejecuta una vez al inicio
    //la condicion se evalua antes de cada iteracion => sie es verdadero continua
    //la actualizacion, se ejecuta al final de cada iteracion. se suma y 
    //vuelve a evaluar

//     console.log("se imprimio el mensaje", i);
// }


//tabla de multiplicar

// let tablaDelcinco = 5;

// for(let i = 1; i <=10; i++){

//     let resultado = tablaDelcinco * i ;

//     console.log( tablaDelcinco + " x " + i + " = " + resultado);

// }

for(let i = 1; i <= 10; i++){

    //sentencia que se llama continue, se utiliza par asaltar una iteracion
    // y continua con la siguiente, 

    //sentencia break si se utiliza automaticamente se frena el bucle y se sale


    if( i  === 3){
        break;
    }
    console.log(i)

}


/*
while => es una estructura de control, que va a repetir un conjunto 
de instrucciones mientras se cumpla una condicion especifica.


while(condicion){

    bloque de codigo a ejecutar
}



*/

let numero= 1;

while( numero <=10){

    console.log("el numero que se muestra en consola es: " + numero);
    numero++

}


/**
 * do... while => se utiliza para ejecutar un bloque de codigo, al menos 
 * una vez y luego repetirlo mientras se cumpla una condicion especifica. 
 
    do{
    
        //bloque de codigo a ejecutar
    
    }while(condicion)


 */

let clave;

let intentos = 0;
const MAX_INTENTOS = 3;

    // do{
    //     clave = prompt("contraseña")
    // }while(clave !== 'clave123')

    //     console.log("contraseña correcta")

    do{
        clave = prompt('ingresa la contraseña');
        intentos ++;

        if(clave === 'clave123'){
            console.log("contraseña correcta")
            break; // si el usuario pone la contraseña directamente se corta el bucle
        }

        if(intentos >= MAX_INTENTOS){
            console.log("la cantidad de intentos  se alcanzo")
            break;
        }



    }while(true);//el true hace que se controle el do while por caondiciones declaradas en do


