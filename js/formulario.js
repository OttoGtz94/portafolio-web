var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var correo = formulario.correo;
var sexo = formulario.sexo;
var terminos = formulario.terminos;
var error = document.getElementById('error');
//var errores = formulario.error;

function validarNombre(e){
	if (nombre.value == '' || nombre.value == null) {
		console.log('Campo de nombre nulo');
		error.style.display = 'block';
		error.innerHTML += '<li>Completa nombre</li>';
		e.preventDefault();
	}else {
		error.style.display = 'none';
	}
}
function validarCorreo(e){
	if (correo.value == '' || correo.value == null) {
		console.log('Campo de correo nulo');
		error.style.display = 'block';
		error.innerHTML += '<li>Completa correo</li>';
		e.preventDefault();
	}else {
		error.style.display = 'none';
	}
}

function validarSexo(e) {
	if (sexo.value == '' || sexo.value == null) {
		console.log('No se valido sexo');
		error.style.display = 'block';
		error.innerHTML += '<li>Selecciona un sexo</li>';
		e.preventDefault();
	}else {
		error.style.display ='none';
	}
}

function validarTerminos(e) {
	if (!terminos.checked) {
		console.log('No se aceptaron los terminos');
		error.style.display = 'block';
		error.innerHTML += '<li>Acepta los terminos</li>';
		e.preventDefault();
	}else {
		error.style.display ='none';
	}
}

function validarFormulario(e){
	error.innerHTML = '';
	validarNombre(e);
	validarCorreo(e);
	validarSexo(e);
	validarTerminos(e);
}

formulario.addEventListener('submit',validarFormulario);