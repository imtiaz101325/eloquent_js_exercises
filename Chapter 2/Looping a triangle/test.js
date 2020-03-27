const question = require('./question');

describe(
  'Loop a triangle', () => {
    it('Prints a Triangle', () => {
        expect(question()).toBe(
`#
##
###
####
#####
######
#######`
        );
    })
  }
)