const solution = require('./solution');

describe('Chess board', () => {
  it('returns expected output', () => {
    expect(solution()).toBe(` # # # #
# # # # 
  # # # #
# # # # 
  # # # #
# # # # 
  # # # #
# # # # `);
  });
});