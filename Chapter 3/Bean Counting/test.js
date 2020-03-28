const solution = require('./solution');

describe('Bean Counting', () => {
  const userFunc = solution();

  it('returns a function with a name "countBs" or "countChar"', () => {
    expect(userFunc.name === 'countBs' || userFunc.name === 'countChar').toBe(true);
  });

  if (userFunc.name === 'countBs') {
    it('returns a function that takes one argument', () => {
      expect(userFunc.length).toBe(1);
    });

    it('counts number of "B"s in the input', () => {
      expect(userFunc('Becasue Baloons Been Bouncing')).toBe(4);
    });
  }

  if (userFunc.name === 'countChar') {
    it('returns a function that takes one argument', () => {
      expect(userFunc.length).toBe(2);
    });

    it('counts number of charaters from second argument in the input', () => {
      expect(userFunc('Becasue Baloons Been Bouncing', 'B')).toBe(4);
    });
  }
});
