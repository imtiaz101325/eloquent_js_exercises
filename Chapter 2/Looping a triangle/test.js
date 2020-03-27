const solution = require('./solution');

describe(
  'Loop a triangle', () => {
    it('Prints a Triangle', () => {
        expect(solution()).toBe(
`#
##
###
####
#####
######
#######`
        );
    });
  }
);