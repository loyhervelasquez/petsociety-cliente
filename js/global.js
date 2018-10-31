function isAuth() {
	return getItem("nombre_organizacion") && getItem("api_token");
}

function setItem(nombre, valor) {
	localStorage.setItem(nombre, valor);
}

function getItem(nombre) {
	return localStorage.getItem(nombre);
}

function removeItem(nombre) {
	localStorage.removeItem(nombre);
}

function delItem(nombre) {
	removeItem(nombre);
}