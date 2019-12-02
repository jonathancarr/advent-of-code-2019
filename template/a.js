// Actual solution

const run = (input) =>  {

  return "Don't forget to return something :^)"
}

// Tests

const tests = [
  { input: '', answer: 0 },
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


