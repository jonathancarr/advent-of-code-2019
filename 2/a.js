// Actual solution

const run = (input) =>  {
  const vals = input.split(",").map(str => parseInt(str));

  let index = 0;
  while(vals[index] != 99) {
    const opcode = vals[index];
    const n1 = vals[vals[index + 1]];
    const n2 = vals[vals[index + 2]];
    const n3 = vals[index + 3];

    if (opcode == 1) vals [n3] = n1 + n2;
    if (opcode == 2) vals [n3] = n1 * n2;

    index += 4;
  }

  return vals[0]
}

// Tests

const tests = [
  { input: '1,0,0,0,99', answer: 2 },
  { input: '2,3,0,3,99', answer: 2 },
  { input: '2,4,4,5,99,0', answer: 2 },
  { input: '1,1,1,4,99,5,6,0,99', answer: 30 },
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


