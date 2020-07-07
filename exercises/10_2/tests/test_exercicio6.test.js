const dogPic = require('../dogPic');

describe('Criar uma função que faça uma requisição para a api dog pictures', () => {
  dogPic.carrocinha = jest.fn();
  afterEach(dogPic.carrocinha.mockReset());
  test('Testando se a promisse resolve!', () => {
    dogPic.carrocinha.mockResolvedValue('sucessuuu');
    dogPic.carrocinha();
    expect(dogPic.carrocinha).toHaveBeenCalled();
    expect(dogPic.carrocinha).toHaveBeenCalledTimes(1);
    expect(dogPic.carrocinha()).resolves.toBe('sucessuuu');
    expect(dogPic.carrocinha).toHaveBeenCalledTimes(2);
  });
  
  test('Testando quando a promisse não resolve!', () => {
    dogPic.carrocinha.mockRejectedValue('faiô minin(a|u)!');

    expect(dogPic.carrocinha).toHaveBeenCalled();
    expect(dogPic.carrocinha).toHaveBeenCalledTimes(3);
    expect(dogPic.carrocinha()).rejects.toBe('faiô minin(a|u)!');
    expect(dogPic.carrocinha).toHaveBeenCalledTimes(4);
  });

  
});