//GENERAR COMENTARIOS EN UNA SOLA LINEA 

/*
    GENERAR COMENTARIOS

  let saludo = "saludo";
        console.log(saludo)

        */

/**
 * VARIABLE = es un contenedor que almacena datos, los tipos de datos que puede almacenar son varios, numericos
 * cadena de caracteres (string), booleano, arrays objetos, funciones.
 * 
 * 
 * scope = se refiere a ambito, hace referencia al contexto en el que la variable va a ser accesible o visible. 
 * Es de donde se va a poder acceder. 
 * 
 * 
 * palabra clave(var, let o const) seguido de un nombre(tiene que hacer referencia al dato que va a alojar) = dato ;
    las variables solamente van a a lojar 1 solo tipo de dato!!


 * var => no se recomienda mucho. se usaba en versiones antiguas de js. scope de tipo global.  

    ejemplo

    var numero = 18;
 */

/**
 * let => tiene un scope de bloque, y solo va a existir esta variable dentro del bloque de codigo donde fue
 * declarada. es que el dato que se aloja dentro de esta variable puede modificarse. 
 * utilizan camelCase => primeraPalabra => primera letra de cada palabra en mayuscula.
 * 
 * 
 * const => es una variable per ode tipo constante. Que no se va a poder modificar, son valores filos. en bloque
 * las constanstes se crean utilizando VEINTE_Y_DOS (utilizan snakeCase) => esto se usa para diferenciar
 * let y const en nuestros codigos
 * 
 * 
 * en javascript las variables son keySensitive => que javascript dependiendo como escribamos nosotros la palabra
 * las va a considerar diferentes.
 *  let rosa = 8;
    let ROSA = 9;
    let Rosa = 5;
 */
//declarar
let numero;


//asignacion
numero = 1;



//variables declarada e inicializada
let veinteYUno = 21;
console.log(veinteYUno);

veinteYUno = "veinte y uno";
 console.log(veinteYUno);


/*
las cadenas de caracteres o string
se escriben entre
""
''
`` alt96

*/ 


// const VEINTE_Y_DOS = 22;
// console.log(VEINTE_Y_DOS);

// VEINTE_Y_DOS = "veinte y dos";
// console.log(VEINTE_Y_DOS);

// console.log(), es una funcion que nos permite
//imprimir mensajes o valores en nuestra consola
//del navegador

/**
 * operadores
 * 
 * +
 * -
 * *
 * /
 * %
*/
/**
 * prompt()
 * como sentencia y funcion me permite a mi 
 * que el usuario introduzca informacion
 * todos los datos que recupera prompt los almacena como una cadena de caracteres.
 * para poder en caso de usar numeros, convertirlos como tal escribimos parseInt(Y DENTRO DE LOS PARENTESIS PONEMOS
 * EL PROMPT)
 * 
 */
let numeroUno = parseInt(prompt("por favor ingresa un numero:"));
let numeroDos = parseInt(prompt("ingresa otro numero: "));

let suma = numeroUno + numeroDos;

console.log("el resultado de la suma es "+ suma);

// let palabraUno = "cinco";
// let palabraDos = "seis";

// let palabras = palabraUno + " " + palabraDos;

// console.log(palabras);