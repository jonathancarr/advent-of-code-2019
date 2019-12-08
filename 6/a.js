// Actual solution

const run = (input) =>  {
  // Construct orbits map
  const orbits = {};
  input.split('\n').forEach((row) => {
    const [a, b] = row.trim().split(')');
    orbits[b] = a;
  })

  const countOrbits = (key) => {
    if (!orbits[key]) return 1;
    return countOrbits(orbits[key]) + 1;
  }

  let count = 0;
  for (key in orbits) {
    count += countOrbits(orbits[key])
  }
  return count;
}

// Tests

const tests = [
  { input: 'COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L', answer: 42 },
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


