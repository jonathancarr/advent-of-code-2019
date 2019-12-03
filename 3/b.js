// Actual solution

const run = (input) =>  {

  // Possible steps
  const dirs = {
    'U': [0, 1],
    'R': [1, 0],
    'D': [0, -1],
    'L': [-1, 0],
  };

  // Find all coordinates traversed for list of moves
  const getPath = (moves) => {
    const path = [];
    let x = 0, y = 0;
    moves.forEach(move => {
      const dir = move[0];
      const dist = move.substring(1);
      for (let i = 0; i < dist; i++) {
        x += dirs[dir][0];
        y += dirs[dir][1];
        path.push([x, y]);
      }
    });
    return path;
  }

  const [firstMoves, secondMoves] = input.split('\n');
  const firstPath = getPath(firstMoves.split(','));
  const secondPath = getPath(secondMoves.split(','));

  // Find intersections
  // Object comparison in js makes this suck :'(
  const intersections = firstPath.filter(p1 =>
    secondPath.reduce((found, p2) => found || (p1[0] === p2[0] && p1[1] === p2[1]), false)
  );

  // Find index of point in path
  const findPointIndex = (path, point) =>
    path.findIndex(p => p[0] === point[0] && p[1] === point[1]) + 1;

  // Find steps to each intersection
  const intersectionSteps = intersections.map(p => {
    return findPointIndex(firstPath, p) + findPointIndex(secondPath, p);
  });

  // Return earliest intersection
  return intersectionSteps.sort((a, b) => a - b)[0];
}

// Tests

const tests = [
  { input: 'R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83', answer: 610 },
  { input: 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7', answer: 410 },
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


