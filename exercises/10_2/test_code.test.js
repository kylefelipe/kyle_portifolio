const sourceCode = require('./source_code');

const usarNosTestes = {
  texto: 'Um texto qualquer',
}

describe('Testando a primeira função do exercício!', () => {
  it('Testando se a função randomNumber é uma função', () => {
    expect(typeof sourceCode.randomNumber).toBe('function');
  });
  it('Primeiro teste do exercício sobre a função randomNumber!', () => {
    sourceCode.randomNumber = jest.fn().mockReturnValue(10);
    sourceCode.randomNumber();
    expect(sourceCode.randomNumber).toHaveBeenCalled();
    expect(sourceCode.randomNumber).toHaveBeenCalledTimes(1);
    expect(sourceCode.randomNumber()).toBe(10);
    expect(sourceCode.randomNumber).toHaveBeenCalledTimes(2);
  });
  it('Segundo teste do exercício sobre a função randomNumber!', () => {
    sourceCode.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    sourceCode.randomNumber(10, 5);
    expect(sourceCode.randomNumber).toHaveBeenCalledTimes(1);
    expect(sourceCode.randomNumber(10, 5)).toBe(2);
  });
  it('Terceiro teste do exercício sobre a função randomNumber!', () => {
    sourceCode.randomNumber = jest.fn().mockImplementation((...params) => {
      return params.slice(1).reduce((acc, item) => acc * item, params[0])
    });
    expect(sourceCode.randomNumber(2, 5, 10)).toBe(100);
    expect(sourceCode.randomNumber).toHaveBeenCalledTimes(1);
  });
});

const sourceCode2 = require('./source_code2');

describe('Testando a segunda função do exercício!', () => {
  it('A função deve receber uma string e retornar em caixa alta!', () => {
    expect(sourceCode2.highBox(usarNosTestes.texto)).toBe(usarNosTestes.texto.toUpperCase());
  });
});

describe('Testando a terceira função do exercício!', () => {
  it('A função deve receber uma string e retornar apenas a primeira letra!', () => {
    expect(sourceCode2.firstCharacter(usarNosTestes.texto).toBe(usarNosTestes.texto[0]));
  });
});