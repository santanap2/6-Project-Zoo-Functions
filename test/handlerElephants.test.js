const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('O argumento `count` retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('O argumento `names` retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });

  it('O argumento `averageAge` retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('O argumento `location` retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('O argumento `popularity` retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('O argumento `availability`retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });

  it('Retorna undefined se o parâmetro for undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Retorna `Parâmetro inválido, é necessário uma string` se o parâmetro não for uma string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Retorna null se o parâmetro não for existir em `zoo_data.js`', () => {
    expect(handlerElephants('unavailable')).toBe(null);
  });
});
