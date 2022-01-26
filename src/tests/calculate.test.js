import calculate from '../logic/calculate';

describe('5 + 3 should equals 8', () => {
  test('user clicks on 5', () => {
    const object = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(object, '5').next).toBe('5');
  });

  test('user clicks on +', () => {
    const object = {
      total: null,
      next: '5',
      operation: null,
    };
    expect(calculate(object, '+').operation).toBe('+');
  });

  test('user clicks on 3', () => {
    const object = {
      total: '5',
      next: null,
      operation: '+',
    };
    expect(calculate(object, '3').next).toBe('3');
  });

  test('user clicks on =', () => {
    const object = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(object, '=').total).toBe('8');
  });
});
