import operate from '../logic/operate';

describe('test the calculator operations', () => {
  test('Test if the addition(+) operator works', () => {
    const answer = operate(1, 2, '+');

    expect(answer).toBe('3');
  });

  test('Test the multiplication operation works(x)', () => {
    const answer = operate(4, 2, 'x');
    expect(answer).toBe('8');
  });

  test('Test the divide operation works(÷)', () => {
    const answer = operate(4, 2, '÷');
    expect(answer).toBe('2');
  });

  test('Test the divide operation works(-)', () => {
    const answer = operate(8, 3, '-');
    expect(answer).toBe('5');
  });

  test('Test if it returns error if divide number by Zero(÷)', () => {
    const answer = operate(8, 0, '÷');
    expect(answer).toBe("Can't divide by 0.");
  });

  test('Test if the modulo operation works', () => {
    const answer = operate(10, 5, '%');
    expect(answer).toBe('0');
  });

  test('Test if we can find modulo of zero', () => {
    const answer = operate(4, 0, '%');
    expect(answer).toBe("Can't find modulo as can't divide by 0.");
  });
});
