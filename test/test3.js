// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');


describe('Función resta', function () {
        it('Resta de números positivos', function () {
            assert.equal(math.restar(4, 6), -2);
            assert.equal(math.restar(6, 4), 2);
            assert.equal(math.restar(6, 6), 0);
        });
        it('Resta de números positivos y negativos', function () {
            assert.equal(math.restar(-2, 6), -8);
        });
        it('Resta de números negativos', function () {
            assert.equal(math.restar(-2, -3), 1);
        });
    });


// Test
describe('Función par', function () {
it('comprobar función par', function() {
  operaciones.par.should.be.a.Function();
  should.equal(operaciones.par(2), 0);
  should.equal(operaciones.par(4), 0);
  should.equal(operaciones.par(5), 1);
});
