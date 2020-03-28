const solution = require('./solution');

describe('Minimum', () => {
  const userFunc = solution();

  it('returns a function with a name "min"', () => {
    expect(userFunc.name).toBe('min');
  });

  it('returns a function that takes two arguments', () => {
    expect(userFunc.length).toBe(2);
  });

  it('finds the minimum of it\'s two inputs', () => {
    expect(userFunc(1, 2)).toBe(1);
    expect(userFunc(-100, 100)).toBe(-100);
  });
});
