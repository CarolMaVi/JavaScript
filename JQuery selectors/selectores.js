
$(document).ready(function () {
    var opciones = document.getElementsByTagName("option");

    for (let i = 0; i < opciones.length; i++) {
        opciones[i].onclick = function () { darEstilo(i + 1) };
    }
});

function darEstilo(opcion) {

    switch (opcion) {
        case 1:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("#Lastname").css("background-color", "yellow");
            $("#Lastname").css("border-color", "red");
            break;
        case 2:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(".intro").css("background-color", "yellow");
            $(".intro").css("border-color", "red");
            break;
        case 3:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(".intro, #Lastname").css("background-color", "yellow");
            $(".intro, #Lastname").css("border-color", "red");
            break;
        case 4:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("h1").css("background-color", "yellow");
            $("h1").css("border-color", "red");
            break;
        case 5:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("h1, p").css("background-color", "yellow");
            $("h1, p").css("border-color", "red");
            break;
        case 6:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:first").css("background-color", "yellow");
            $("p:first").css("border-color", "red");
            break;
        case 7:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:last").css("background-color", "yellow");
            $("p:last").css("border-color", "red");
            break;
        case 8:
            $("*:not(.newsletter)").css("background-color", "");
            $("*:not(.newsletter)").css("border-color", "");

            $("tr:even").css("background-color", "yellow");
            $("tr:even").css("border-color", "red");
            break;
        case 9:
            $("*:not(.newsletter)").css("background-color", "");
            $("*:not(.newsletter)").css("border-color", "");

            $("tr:odd").css("background-color", "yellow");
            $("tr:odd").css("border-color", "red");
            break;
        case 10:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:first-child").css("background-color", "yellow");
            $("p:first-child").css("border-color", "red");
            break;
        case 11:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:first-of-type").css("background-color", "yellow");
            $("p:first-of-type").css("border-color", "red");
            break;
        case 12:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:last-child").css("background-color", "yellow");
            $("p:last-child").css("border-color", "red");
            break;
        case 13:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("p:last-of-type").css("background-color", "yellow");
            $("p:last-of-type").css("border-color", "red");
            break;
        case 14:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("li:first-child").css("background-color", "yellow");
            $("li:first-child").css("border-color", "red");
            break;
        case 15:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("li:nth-last-child(1)").css("background-color", "yellow");
            $("li:nth-last-child(1)").css("border-color", "red");
            break;
        case 16:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("li:nth-child(2)").css("background-color", "yellow");
            $("li:nth-child(2)").css("border-color", "red");
            break;
        case 17:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("li:nth-last-of-type(2)").css("background-color", "yellow");
            $("li:nth-last-of-type(2)").css("border-color", "red");
            break;
        case 18:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("b:only-child").css("background-color", "yellow");
            $("b:only-child").css("border-color", "red");
            break;
        case 19:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("h3:only-of-type").css("background-color", "yellow");
            $("h3:only-of-type").css("border-color", "red");
            break;
        case 20:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("div > p").css("background-color", "yellow");
            $("div > p").css("border-color", "red");
            break;
        case 21:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("div p").css("background-color", "yellow");
            $("div p").css("border-color", "red");
            break;
        case 22:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("ul + p").css("background-color", "yellow");
            $("ul + p").css("border-color", "red");
            break;
        case 23:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("ul ~ table").css("background-color", "yellow");
            $("ul ~ table").css("border-color", "red");
            break;
        case 24:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("ul li:eq(0)").css("background-color", "yellow");
            $("ul li:eq(0)").css("border-color", "red");
            break;
        case 25:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("ul li:gt(0)").css("background-color", "yellow");
            $("ul li:gt(0)").css("border-color", "red");
            break;
        case 26:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $("ul li:lt(2)").css("background-color", "yellow");
            $("ul li:lt(2)").css("border-color", "red");
            break;
        case 27:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(":header").css("background-color", "yellow");
            $(":header").css("border-color", "red");
            break;
        case 28:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(":header:not(h1)").css("background-color", "yellow");
            $(":header:not(h1)").css("border-color", "red");
            break;
        case 29:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(":focus").css("background-color", "yellow");
            $(":focus").css("border-color", "red");
            break;
        case 30:
            $("*:not(.newsletter, td, th)").css("background-color", "");
            $("*:not(.newsletter, td, th)").css("border-color", "");

            $(":contains('Duck')").css("background-color", "yellow");
            $(":contains('Duck')").css("border-color", "red");
            break;

        default:
            break;
    }
}