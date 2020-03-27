const question = require('./question');

describe(
  'Print FizzBuzz from 1 to 100', () => {
    it('Prints FizzBuzz', () => {
        console.log = jest.fn();
        question();

        let correct = true;

        if (console.log.mock.calls.length < 1) {
          correct = false;
        } else {
          const ans = [...Array(100).keys()].map(num => num+1)
          .filter(
            num => num%3===0 || num%5 === 0
          ).map(
            i => {
              if (i%3 === 0 && i%5 === 0) {
                return 'FizzBuzz';
              }
              
              if (i%3 === 0) {
                return 'Fizz';
              }

              return 'Buzz';
            }
          );

          for (let i=0; i<console.log.mock.calls.length; i++) {
            if (ans[i] !== console.log.mock.calls[i][0]) {
              console.warn(`${i} is wrong. Expected ${ans[i]} got ${console.log.mock.calls[i][0]}`);
              correct = false;
            }
          }
        }

        expect(correct).toBe(true);
    })
  }
)