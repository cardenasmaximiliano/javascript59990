/*
DOM => DOCUMENT OBJECT MODEL => MODELO DE OBJETO DEL DOCUMENTO
es la manera con la cual nosotros vamos a poder interactuar con nuestro HTML.

Las etiquetas visto desde JS se van a considerar nodos, a para acceder a estos nodos
vamos a utilizar los atributos class, id o la misma etiqueta.

*/
/*
DOCUMENT => es el objeto que nos proporciona la interfaz para interactuar
con los elementos y las estructuras de HTML.
a traves de  document, nosotros vamos a poder acceder, modificar y manipular
HTML.

se puede acceder de 5 maneras a HTML
*/

//MANERA MODERNA DE LLAMAR ETIQUETAS Y ATRIBUTOS

//1° => id, getElementById("elNombreDelId")

// let titulo = document.getElementById("titulo");

// console.log(titulo);

// //2° manera de acceder al DOM => classs, metodo llamado getElementByClassName

// let subtitulo = document.getElementsByClassName("ingresarPorClass");

// console.log(subtitulo);

/*
HTMLCollection => es una coleccion de elementos de DOM.
que se va a actualizar en caso de que se modifique el documento.
Sirve para representar a las clases de un codigo html.
Esta interfaz, va a representar una lista de objetos de elementos HTML.
Vamos a poder acceder a las posiciones en esa coleccion.

*/

//3° => tags, getElementsByTagName("")

// let misLi = document.getElementsByTagName("li");
// console.log(misLi)

//MANERAS CLASICAS DE ACCEDER A HTML

//4° => querySelector, nos permiete seleccionar nodos con la misma sintaxis
//que CSS. En el caso de querySelector "solo" nos va a traer el primer
//objeto que encuentre. 

//5° => querySelectorAll nos va a traer a todos los nodos que cumplan con 
//la condicion


// let queryNombres = document.querySelector(".nombres");
// console.log(queryNombres);

// let queryAll = document.querySelectorAll(".nombres");
// console.log(queryAll);


/**
    HTMLColletion => coleccion en vivo de elementos HTML.
    En vivo significa que si el DOM cambia, la coleccion se actualiza
    automaticamente.
    solo incluye los nodos que son elementos como por ej div p span.

    NodeList => es una coleccion que puede contener cualquier tipo de nodo
    en DOM, no solamente elmentos HTML. 

    el 1° cuando se necesite trabajar solamente con elementos HTML.
    el 2° cuando necesitemos que incluyan diferentes tipos de nodos y sus
    atributos.
 */

// let titulo = document.getElementById("hdinamico")

//para manipular los nodos, tenemos diferentes maneras.

//innerText => es una propiedad, que nos permite acceder al texto visible dentro
//del elemento, omitiendo cualquier contenido anterior. 

// titulo.innerText = "cambiamos html"


// document.getElementById("hdinamico").innerText = "cambiamos titulo mas resumido"

//innerHTML => que nos permite crear contenido html interno dentro de un elemento. 

let containerCards = document.getElementById("container-cards");


containerCards.innerHTML = 
                            `
                            <div class="card ">
                                <h2>producto1</h2>
                                <p>informacion del producto</p>
                                <button>comprar</button>
                            </div>
                            `;


// createELement => nos permite a nosotros crear un nuevo elemento
//HTML en el dom 

let contenedor = document.getElementById("contenedor");

let parrafo = document.createElement("p");


parrafo.innerText = "esto es un parrafo creado desde js";
parrafo.className = "rojo";
parrafo.id ="nuevoId";

//appendchild => esto es un metodo que seu utiliza para agregar
//el nodo creado desde javascript a HTML.

contenedor.appendChild(parrafo);

//si nosotros quisieramos agregar quitar clases.

//a traves del objeto classList, nos proporciona
//metodos para agregar o eliminar clases.


parrafo.classList.add("nuevaClase");
parrafo.classList.remove("nuevaClase");

parrafo.classList.remove("rojo");
