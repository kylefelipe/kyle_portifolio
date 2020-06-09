const assert = require('assert');

// Exercício 1: soma de 2 parâmetros.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters mus be numbers');
  }
  return a + b;
}

// Testando se a função existe

assert.equal(typeof sum, 'function');
assert.deepEqual(sum(4, 5), 9);
assert.deepEqual(sum(0, 0), 0);
assert.throws(() => {sum(4, '5');}, 'error');
assert.throws(() => {sum(4, '5');}, /^Error: Parameters mus be numbers$/);
