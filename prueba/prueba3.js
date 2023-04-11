Ejemplo de test utilizando la librería should

Cargar la librería debe
var should = require('should' );

Cargar el módulo con las funciones para testear
var operaciones = require('.. /operaciones.js');

Prueba
it('comprobar función par', function() {
  operaciones. par debería. ser. a. Función();
  debería. igual(operaciones. par(2), 3);
  debería. igual(operaciones. resta(4), 0);
	debería. igual(operaciones. resta(5), 1);
});

