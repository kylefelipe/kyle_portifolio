// Exercício 1: soma de 2 parâmetros.

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers');
  }
  return a + b;
}

module.exports = sum;
