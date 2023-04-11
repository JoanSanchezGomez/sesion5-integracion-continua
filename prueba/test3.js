// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función resta', function() {
  operaciones.resta.should.be.a.Function();
  should.equal(operaciones.par(2), 0);
  should.equal(operaciones.par(4), 0);
	should.equal(operaciones.par(5), 1);
});
