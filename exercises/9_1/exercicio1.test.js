const sum = require('./execicio_testes_1');
const myIndexOf = require('./execicio_testes_2');
const mySum = require('./execicio_testes_3');

describe('Testando o exercicio_testes_1', () => {
  it ('Deve ser uma função', () => {
    expect(typeof sum).toBe('function');
  });
  it ('Somando dois inteiros, deve retorna outro inteiro', () => {
    expect(Number.isInteger(sum(1, 1))).toBeTruthy();
  });
  it ('Somando 4 e 5 deve retornar 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it ('Somando 0 e 0 deve retornar 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it ('Lança um erro quando os parâmetros são 4 e "5".', () => {
    expect(() => {sum(4, "5")}).toThrow('Parameters must be numbers');
  });
});

const arrayTeste = [1, 2, 3, 4];
const arrayExpected = [1, 2, 4];q
const arrayTeste2 = [1, -2, -3, 4];

describe( 'Testando o exercicio_testes_2', () => {
  it ('Deve ser uma funcão.', () => {
    expect(typeof myIndexOf).toBe('function');
  });
  it (`O indice de 3 no array [${arrayTeste}] deve ser 2`, () => {
    expect(myIndexOf(arrayTeste, 3)).toBe(2);
  });
  it (`Quando passado um item não existente, deve retornar -1`, () => {
    expect(myIndexOf(arrayTeste, 5)).toBe(-1);
  });
});

describe('Testando o exercicio_testes_3', () => {
  it('Deve ser uma função', () => {
    expect(typeof mySum).toBe('function');
  });
  it(`Somando o array [${arrayTeste}] deve retornar 10`, () => {
    expect(mySum(arrayTeste)).toBe(10);
  });
  it(`Somando o array ${arrayTeste2} deve retornar 0`, () => {
    expect(mySum(arrayTeste2)).toBe(0);
  });
});

const myRemove = require('./execicio_testes_4');

describe('Testando o execicio_testes_4', () => {
  it('Deve ser uma função', () => {
    expect(typeof myRemove).toBe('function');
  });
  it(`Deve retornar o array [${arrayTeste}] sem o item 3.`, () => {
    expect(myRemove(arrayTeste, 3)).toEqual([1, 2, 4]);
  });
  it(`Verficando se a chamada myRemove([${arrayTeste}], 3) NÃO retorna [${arrayTeste}]`, () => {
    expect(myRemove(arrayTeste, 3)).not.toEqual(arrayTeste);
  });
  it('Verificando se o array passado não sofreu alterações', () => {
    expect(myRemove(arrayTeste)).toEqual(arrayTeste);
  });
  it('Verifica se, passado um parâmetro fora do array, ele retorna o mesmo', () => {
    expect(myRemove(arrayTeste, 5)).toEqual(arrayTeste);
  });
});

const myRemoveWhithoutCopy = require('./execicio_testes_5');

describe('Testando o exercicio_testes_5', () => {
  it('Deve ser uma função', () => {
    expect(typeof myRemoveWhithoutCopy).toBe('function');
  });
  it(`A chamada myRemoveWithoutCopy([${arrayTeste}], 3) retorna [${arrayExpected}]`, () => {
    expect(myRemoveWhithoutCopy(arrayTeste, 3)).toEqual(arrayExpected);
  });
  it(`A chamada myRemoveWhithoutCopy([${arrayTeste}], 3) NÃO retorna [${arrayTeste}]`, () => {
    expect(myRemoveWhithoutCopy(arrayTeste, 3)).not.toEqual([1,2,3,4]);
  });
});