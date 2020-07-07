const dogPic = require('../dogPic');

describe('Criar uma função que faça uma requisição para a api dog pictures', () => {
  let caoburao = jest.spyOn( dogPic, 'carrocinha');
  afterEach(() => {
    caoburao.mockRestore();
    caoburao = jest.spyOn( dogPic, 'carrocinha');
  });
  
  test('Testando se a promisse resolve!', async () => {
    caoburao.mockResolvedValue('sucessuuu');
    caoburao();
    expect(caoburao).toHaveBeenCalled();
    expect(caoburao).toHaveBeenCalledTimes(1);
    expect(caoburao()).resolves.toBe('sucessuuu');
    expect(caoburao).toHaveBeenCalledTimes(2);
  });

  test('Testando quando a promisse não resolve!', async () => {
    caoburao.mockRejectedValue('faiô minin(a|u)!');
    caoburao();
    expect(caoburao).toHaveBeenCalled();
    expect(caoburao).toHaveBeenCalledTimes(1);
    expect(caoburao()).rejects.toBe('faiô minin(a|u)!');
    expect(caoburao).toHaveBeenCalledTimes(2);
  });  
});