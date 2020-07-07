const stringUm = 'Uma string qualquer.';
const stringDois = 'Oura string qualquer.';
const srcCode2 = require('../source_code2');
jest.mock('../source_code2');

describe('Testes do Exercício 4.', () => {
  it('Deve haver 3 funções!', () => {
    const items = Object.keys(srcCode2);
    const isFunction = items.map(item => typeof srcCode2[item] === 'function').filter(item => item === true);
    expect(isFunction.length).toBe(3);
  });

  it(`A primeira função deve receber uma string e retornar em caixa alta, antes do mock,
  depois do mock deve retornar uma string em caixa baixa!`, () => {
    srcCode2.highBox.mockImplementation(string => string.toLowerCase());
    expect(srcCode2.highBox(stringUm)).toBe(stringUm.toLowerCase());
    expect(srcCode2.highBox).toHaveBeenCalled();
    expect(srcCode2.highBox).toHaveBeenCalledTimes(1);
    expect(srcCode2.highBox).toHaveBeenCalledWith(stringUm);
  });

  it('A segunda função deve receber uma string e retornar apenas a última letra!', () => {
    srcCode2.firstCharacter.mockImplementation(string => string[-1]);
    expect(srcCode2.firstCharacter(stringUm)).toBe(stringUm[-1]);
    expect(srcCode2.firstCharacter).toHaveBeenCalled();
    expect(srcCode2.firstCharacter).toHaveBeenCalledTimes(1);
    expect(srcCode2.firstCharacter).toHaveBeenCalledWith(stringUm);
  });

  it('A terceira função deve receber duas strings e retornar sua concatenação!', () => {
    srcCode2.concatStr.mockImplementation((...params) => params.reduce((acc, string) => acc + string));
    expect(srcCode2.concatStr(stringUm, stringDois)).toBe(`${stringUm}${stringDois}`);
    expect(srcCode2.concatStr).toHaveBeenCalled();
    expect(srcCode2.concatStr).toHaveBeenCalledTimes(1);
    expect(srcCode2.concatStr).toHaveBeenCalledWith(stringUm, stringDois);
  });
});
