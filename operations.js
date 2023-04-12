/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};

/* Función par */
var esPar = function par (a) {
	return a%2;	
};

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	par
}
