// Actual solution

const run = (input) =>  {
  // Construct undirected orbits graph
  const orbits = {};

  const addToMap = (a, b) => {
    if (!(a in orbits)) orbits[a] = [];
    if (!(b in orbits)) orbits[b] = [];
    if (!(orbits[a].includes(b))) orbits[a].push(b);
    if (!(orbits[b].includes(a))) orbits[b].push(a);
  }

  input.split('\n').forEach((row) => {
    const [a, b] = row.trim().split(')');
    addToMap(a, b);
  })

  // Traverse graph for shortest path
  let shortestPath = Object.keys(orbits).length;
  const searchGraph = (node, visited) => {
    if (node == 'SAN') {
      shortestPath = Math.min(shortestPath, visited.length - 2);
      return;
    }
    orbits[node].forEach(next => {
      if (!visited.includes(next)) searchGraph(next, [...visited, node])
    });
  }

  searchGraph('YOU', [])

  return shortestPath;

}

// Tests

const tests = [
  { input: 'COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN', answer: 4 },
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


