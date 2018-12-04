window.onload() = iniEventos;

function iniEventos(){
    document.getElementById("submit").onclick = validarBolsa;
}

function validarBolsa() 
{
    var valido = true;

    //VALIDACION DE FECHA
    var patron = /^\d{2}[/]\d{2}[/]\d{4}$/;
    var fecha = document.getElementById("fecha").value;

    if (patron.test(fecha)) 
    {
        alert("Fecha correcta");
    }
    else 
    {
        valido = false;
        document.getElementById("fecha").style.border = "2px solid red";
        document.getElementById("errorFecha").innerHTML = "Introduce una fecha correcta";
    }

    //VALIDACION DE COCINERO

    patron = /^[A-Z]{2}\W\d{4}$/;
    var cocinero = document.getElementById("cocinero").value;

    if(patron.test(cocinero))
    {
        alert("Cocinero correcto");
    }    
    else 
    {
        valido = false;
        document.getElementById("cocinero").style.border = "2px solid red";
        document.getElementById("errorCocinero").innerHTML = "Introduce un cocinero correcto";
    }

    //VALIDACION DE DESTINATARIO

    patron = /^[A-Z]{2,3}[_][a-z]{5,20}[:]\d{4}$/;
    var destinatario = document.getElementById("destinatario").value;

    if(patron.test(destinatario))
     {
        alert("Destinatario correcto");
     }   
    else 
    {
        valido = false;
        document.getElementById("destinatario").style.border = "2px solid red";
        document.getElementById("errorDestinatario").innerHTML = "Introduce un destinatario correcto";
    }

    //VALIDACION DE GRAMOS
    
    patron = /^[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-4][0-9]{3}|5000$/; //O tambien: /^(([1]\d\d)|([2-9]\d\d)|([1-4]\d\d\d)|([5][0][0][0]))$/
    var gramos = document.getElementById("gramos").value;

    if(patron.test(gramos))
    {
        alert("Gramos correctos");
    }    
    else 
    {
        valido = false;
        document.getElementById("gramos").style.border = "2px solid red";
        document.getElementById("errorGramos").innerHTML = "Introduce una cantidad correcta";
    }
    //VALIDACION DE COMPOSICION

    patron = /^([1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-4][0-9]{3}|5000)[g](\D{1,2}\d?){2}$/; //Ejemplo: 200gC3OH7
    var composicion = document.getElementById("composicion").value;

    if (patron.test(composicion))
    {
        alert("Composicion correcta");
    }    
    else 
    {
        valido = false;
        document.getElementById("composicion").style.border = "2px solid red";
        document.getElementById("errorComposicion").innerHTML = "Introduce una composición correcta";
    }
    //VALIDACION DE NUMERO DE CUENTA

    patron = /^[a-z]{2}[0-9]{2}[-][0-9]{12}[-][0-9]{4}$/;
    var cuenta = document.getElementById("cuenta").value;

    if(patron.test(cuenta))
    {
        alert("Cuenta correcta");
    }    
    else 
    {
        valido = false;
        document.getElementById("cuenta").style.border = "2px solid red";
        document.getElementById("errorCuenta").innerHTML = "Introduce un numero de cuenta correcta";
    }
    return valido;

}
