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


describe('Función par', function () {
        it('Resta de números positivos', function () {
            assert.equal(math.par(4), 0);
            assert.equal(math.par(6), 0);
            assert.equal(math.par(5), 1);
        });
        
    });



