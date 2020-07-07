const sourceCode = require('./source_code');

const usarNosTestes = {
  texto: 'Um texto qualquer',
  outroTexto: 'outro texto qualquer',
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

const srcCode2 = require('./source_code2');

describe('Criar um novo arquivo (módulo) e criar 3 funções, antes do mocking!', () => {
  it('Deve haver 3 funções!', () => {
    const items = Object.keys(srcCode2);
    const isFunction = items.map(item => typeof srcCode2[item] === 'function').filter(item => item === true);
    expect(isFunction.length).toBe(3);
    });
  it('A primeira função deve receber uma string e retornar em caixa alta!', () => {
    expect(srcCode2.highBox(usarNosTestes.texto)).toBe(usarNosTestes.texto.toUpperCase());
  });
  it('A segunda função deve receber uma string e retornar apenas a primeira letra!', () => {
    expect(srcCode2.firstCharacter(usarNosTestes.texto)).toBe(usarNosTestes.texto[0]);
  });
  it('A terceira função deve receber duas strings e retornar sua concatenação!', () => {
    expect(srcCode2.concatStr(usarNosTestes.texto, usarNosTestes.outroTexto)).toBe(`${usarNosTestes.texto}${usarNosTestes.outroTexto}`);
  });
});

describe('Fazer o mocking do módulo criado anteriormente!', () => {
});
