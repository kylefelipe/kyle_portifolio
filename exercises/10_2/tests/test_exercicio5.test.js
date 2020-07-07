const srcCode = require('../source_code2');

describe(`Repetir as mesmas implementações do exercício anterior para a primeira função.
Após, restaurar a implementação original e criar os testes!`, () => {
  it('Mockando a função e fazendo ela retornar em caixa baixa!', () => {
    const changeBox = jest
      .spyOn(srcCode, 'highBox')
      .mockImplementation(string => string.toLowerCase());
    
    expect(changeBox('CAIXABAIXA')).toBe('caixabaixa');
    expect(changeBox).toHaveBeenCalled();
    expect(changeBox).toHaveBeenCalledTimes(1);
  });

  it('Fazendo o mock.mockRestore() da função', () => {
    srcCode.highBox.mockRestore();
    expect(srcCode.highBox('caixaalta')).toBe('CAIXAALTA');
  });
});
