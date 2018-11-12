var cuerpo;
var tabla;

window.onload = function () {
    cuerpo = document.getElementsByTagName("body")[0];
    titulo();
    generarBt1();
    titulosTabla();
    generarBt2();
}

/**
 * Genera el título
 */
function titulo() {
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Floristeria DOM");
    titulo.appendChild(textoTitulo);
    cuerpo.appendChild(titulo);
}

/**
 * Función que genera los botones "Generar planta" y "Borrar fila"
 */
function generarBt1() {
    //Creamos un div para meter ambos botones dentro y que nos salgan uno al lado del otro
    var divBotones = document.createElement("div");
    //Boton Generar planta
    var btGenerar = document.createElement("input");
    btGenerar.setAttribute("type", "button");
    btGenerar.setAttribute("value", "Generar planta");
    btGenerar.setAttribute("onClick", "generarPlanta()");
    //Boton Borrar fila
    var btBorrar = document.createElement("input");
    btBorrar.setAttribute("type", "button");
    btBorrar.setAttribute("value", "Borrar fila");
    btBorrar.setAttribute("onClick", "borrarFila()");
    //Añadimos los botones al body
    divBotones.appendChild(btGenerar);
    divBotones.appendChild(btBorrar);
    cuerpo.appendChild(divBotones);
}

/**
 * Función que genera la tabla y escribe en ella sólamente los títulos de la tabla
 */
function titulosTabla() {
    tabla = document.createElement("table");

    //Título Nombre
    var thNombre = document.createElement("th");
    var textoNombre = document.createTextNode("Nombre");
    thNombre.appendChild(textoNombre);
    tabla.appendChild(thNombre);

    //Título Ubicación
    var thUbi = document.createElement("th");
    var textoNombre = document.createTextNode("Ubicación");
    thUbi.appendChild(textoNombre);
    tabla.appendChild(thUbi);

    //Título Ejemplares
    var thEjem = document.createElement("th");
    var textoNombre = document.createTextNode("Ejemplares");
    thEjem.appendChild(textoNombre);
    tabla.appendChild(thEjem);

    //Título Flor
    var thFlor = document.createElement("th");
    var textoNombre = document.createTextNode("Flor");
    thFlor.appendChild(textoNombre);
    tabla.appendChild(thFlor);

    cuerpo.appendChild(tabla);
}

/**
 * Pide los datos para cada planta y llama a la función anadirFila()
 */
function generarPlanta() {
    var nombre = prompt("Nombre: ");
    var ubi = prompt("Ubicación: ");
    var ejemplares = prompt("Ejemplares: ");
    var flor = prompt("Flor: ");

    anadirFila(nombre, ubi, ejemplares, flor);
}

/**
 * Añade una única fila al final de la tabla que estaba creada previamente, con las columnas que pasamos como parámetro
 * @param {*} nombre 
 * @param {*} ubi 
 * @param {*} ejem 
 * @param {*} flor 
 */
function anadirFila(nombre, ubi, ejem, flor) {

    var elementos = [nombre, ubi, ejem, flor];
    var fila = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
        var columna = document.createElement("td");
        var textoCol = document.createTextNode(elementos[i]);
        columna.appendChild(textoCol);
        fila.appendChild(columna);
    }
    tabla.appendChild(fila);
}

/**
 * Borra la última fila de la tabla. Si no hay filas no hace nada.
 */
function borrarFila() {
    tabla.deleteRow(tabla.rows.length - 1);
}

/**
 * Genera el botón "Numero filas" y un <p> con el número de filas que hay en cada momento.
 * Utiliza la función actualizarFilas()
 */
function generarBt2() {
    //Creamos un div para meter el boton y que poderlo centrar
    var divFilas = document.createElement("div");
    //Boton Numero de filas
    var btFilas = document.createElement("input");
    btFilas.setAttribute("type", "button");
    btFilas.setAttribute("value", "Numero filas");
    btFilas.setAttribute("onClick", "actualizarFilas()");

    divFilas.appendChild(btFilas);
    cuerpo.appendChild(divFilas);

    var parrafo = document.createElement("p");
    var textoParrafo = document.createTextNode("Número de filas: 0");
    parrafo.appendChild(textoParrafo);
    divFilas.appendChild(parrafo);
    cuerpo.appendChild(divFilas);
}

/**
 * Actualiza el texto del <p> con el número de filas que hay en cada momento.
 */
function actualizarFilas() {
    var cont = document.getElementsByTagName("tr").length;
    document.getElementsByTagName("p")[0].innerHTML = "Número de filas: " + cont;
}
