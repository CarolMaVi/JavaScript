var aleatorio = 0;  
var clicks = 1;     //Indica si hemos hecho 1 click o 2.
var cont = 0;       //Contador de parejas acertadas
var idAnterior;     //Guarda el id de la primera imagen mostrada
var idActual;       //Guarda el id de la segunda imagen mostrada
var arrayPokemon = ["muk", "lapras", "charmander", "snorlax", "pikachu", "infernape", "muk", "lapras", "charmander", "snorlax", "pikachu", "infernape"];
var copia = new Array(12); 

mezclar();

function mezclar() {

    for (let i = 0; i < arrayPokemon.length; i++) {
        aleatorio = parseInt(Math.random() * 12);

        while (copia[aleatorio] != null) {  

            aleatorio = parseInt(Math.random() * 12);
        }
        copia[aleatorio] = arrayPokemon[i];
    }

    arrayPokemon = copia;
}

function esperaPinta(ms) {
    setTimeout(repintar, ms);
}

function repintar() {
    document.getElementById(idActual).style = 'background-color: red;';
    document.getElementById(idAnterior).style = 'background-color: red;';
}

function emparejar(num) {

    if (clicks == 1) {  //Cuando se hace click en la primera imagen
        clicks = 2;
        idAnterior = num;
        document.getElementById(idAnterior).style = 'background: url("./images/' + arrayPokemon[idAnterior] + '.png");';
        //Deshabilitamos el boton para que no se pueda volver a pulsar y nos lo cuente como un click
        document.getElementById(idAnterior).disabled = true;
    } else {    //Cuando se ha mostrado la primera y se hace click en la segunda imagen
        clicks = 1;
        idActual = num;
        document.getElementById(idActual).style = 'background: url("./images/' + arrayPokemon[idActual] + '.png");';
        document.getElementById(idActual).disabled = true;  //Deshabilitamos el segundo boton pulsado

        //Hacemos que el programa se espere para que podamos visualizar la segunda imagen cuando son distintas, antes de que se de la vuelta

        if (arrayPokemon[idActual] != arrayPokemon[idAnterior]) {   //Si las imagenes son distintas    
            esperaPinta(500);
            //Borramos el atributo disabled de los 2 botones pulsados, para que podamos volverlos a pulsar
            document.getElementById(idAnterior).removeAttribute("disabled");
            document.getElementById(idActual).removeAttribute("disabled");
        }
        else {  //Si las imagenes son iguales
            cont++;
            document.getElementById("encontradas").innerHTML = "Encontradas: " + cont;
        }

        if(cont == 6){
            alert("Has ganado!  ^_^");
        }
    }
}
