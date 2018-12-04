window.onload = inicializarEventos;

function inicializarEventos() {
	document.getElementById("submit").onclick = validarDatos;
}

function validarDatos() {

	var todo_ok = true;
	//validar nombre
	var nombre = document.getElementById("nombre");
	if (nombre.value == "" || nombre.value.length == 0) {
		alert("Por favor, introduce un nombre!");
		document.getElementById("errorNombre").innerHTML = "Por favor, introduce un nombre!";
		todo_ok = false;
	}
	//validar email
	var correo = document.getElementById("email");

	if(!isValidEmail(correo.value)){
		alert("Por favor, introduce un correo electrónico correcto!");
		document.getElementById("errorEmail").innerHTML = "Por favor, introduce un correo electrónico correcto!";
		todo_ok=false;
	}

	var dni = document.getElementById("dni");
	if (isNaN(dni.value) || dni == "" || dni.length != 8) {
		alert("Por favor, introduce un número de DNI");
		document.getElementById("errorDni").innerHTML = "Por favor, introduce un número de DNI";
		todo_ok = false;
	}
	var select = document.getElementById("aficiones").selectedIndex;
	if (select == 0) {
		alert("Por favor, selecciona una opción!");
		document.getElementById("errorAficiones").innerHTML = "Por favor, selecciona una opción!";
		todo_ok = false;
	}
	var check = document.getElementById("cond_si");
	if (!check.checked) {
		alert("No aceptas las condiciones!");
		document.getElementById("errorCond_si").innerHTML = "No aceptas las condiciones!";
		todo_ok = false;
	}
	var radio = document.getElementsByName("radio");
	if (!radio[0].checked) {
		alert("No quieres registrarte!");
		document.getElementById("errorRadio").innerHTML = "No quieres registrarte!";
		todo_ok = false;
	}
	if (todo_ok) {
		alert("Formulario enviado correctamente!");
	}
	return todo_ok;
}

function isValidEmail(mail) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}
