const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função retorna o quadro de horários completo se nenhum parâmetro for passado', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });

  it('Testa se a função retorna o esperado caso o parâmetro seja um dia da semana', () => {
    expect(getOpeningHours('Thursday', '10:30-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Thursday', '10:30-PM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Testa se a função retorna erro caso o parâmetro não seja um dia da semana', () => {
    expect(() => getOpeningHours('notADay', '1:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('Testa se a função retorna erro caso o parâmetro não conter a abreviação correta', () => {
    expect(() => getOpeningHours('Wednesday', '08:30-AA')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Testa se a função retorna erro caso o parâmetro contenha horas não numéricas', () => {
    expect(() => getOpeningHours('Sunday', 'aa:bb-AM')).toThrowError('The hour should represent a number');
  });

  it('Testa se a função retorna erro caso o parâmetro contenha uma hora inexistente', () => {
    expect(() => getOpeningHours('Friday', '15:20-AM')).toThrowError('The hour must be between 0 and 12');
  });

  it('Testa se a função retorna erro caso o parâmetro contenha minutos inexistentes', () => {
    expect(() => getOpeningHours('Friday', '10:70-AM')).toThrowError('The minutes must be between 0 and 59');
  });
});
