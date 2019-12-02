// Actual solution

const run = (input) => input.split("\n").reduce((total, mass) => {
    return total + parseInt((mass / 3)) - 2;
  }, 0);

// Tests

const tests = [
  { input: '12', answer: 2 },
  { input: '14', answer: 2 },
  { input: '1969', answer: 654 },
  { input: '100756', answer: 33583 },
];

// Util

let testsPassed = true;

tests.forEach(test => {
  const answer = run(test.input);
  if (answer != test.answer) {
    console.log(`Test Failed: Input: ${test.input}, Expected output: ${test.answer}, Actual output: ${answer}`);
    testsPassed = false;
  }
});

if (testsPassed) {
  console.log("Tests passed!");

  const input = require('fs').readFileSync('input.txt', 'utf8');

  console.log(`Solution: ${run(input)}`);
}


