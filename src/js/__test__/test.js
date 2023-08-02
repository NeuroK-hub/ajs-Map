import ErrorRepository from '../app';

test('получение текста ошибки по ее коду', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(502)).toBe('Bad Gateway');
});

test('неизвестный код ошибки', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(202)).toBe('Unknown error');
});
