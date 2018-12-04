window.onload = function () 
{
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");

    nombre.onblur = ponerMayusculas;
    apellidos.onblur = ponerMayusculas;
}

function ponerMayusculas()
{
    nombre.value = nombre.value.toUpperCase();
    apellidos.value = apellidos.value.toUpperCase();
}

function validarNombreApe()
{
    var valido = true;

    patron = /^\D{1,20}$/;

    if(!(patron.test(nombre.value) && patron.test(apellidos.value))){
        valido = false;
        document.getElementById("errores").innerHTML = "Errores en Nombre o Apellidos";
    }
}