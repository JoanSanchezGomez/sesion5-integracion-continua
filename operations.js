/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function resta (a, b) {
	return a - b;	
};

/* Función par */
var par = function par (a) {
	return a%2;	
};

/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	par
}
