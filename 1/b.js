// Actual solution

const run = (input) => input.split("\n").reduce((total, mass) => {
  let currentMass = mass;
  let fuel = 0;
  while (currentMass > 0) {
    currentMass = parseInt((currentMass / 3)) - 2;
    if (currentMass >= 0) fuel += currentMass;
  }
  return total + fuel;
}, 0);

// Tests

const tests = [
  { input: '14', answer: 2 },
  { input: '1969', answer: 966 },
  { input: '100756', answer: 50346 },
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


