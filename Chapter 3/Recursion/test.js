const solution = require('./solution');

describe('Recursion', () => {
  const userFunc = solution();

  it('returns a function with a name "isEven"', () => {
    expect(userFunc.name).toBe('isEven');
  });

  it('returns a function that takes one argument', () => {
    expect(userFunc.length).toBe(1);
  });

  it('returns `true` if input is even and `false` if input is odd', () => {
    expect(userFunc(50)).toBe(true);
    expect(userFunc(75)).toBe(false);
    expect(userFunc(-1)).toBe(false);
  });
});
