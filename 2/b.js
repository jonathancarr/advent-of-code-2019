// Actual solution

const run = (input) =>  {
  const valsArray = input.split(",").map(str => parseInt(str));

  for(var x = 0; x <= 99; x++) {
    for(var y = 0; y <= 99; y++) {
      const vals = [...valsArray];
      vals[1] = x;
      vals[2] = y;
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

      if (vals[0] == 19690720) {
        return 100 * vals[1] + vals[2];
      }
    }
  }
}

// No tests for this one :(

const input = require('fs').readFileSync('input.txt', 'utf8');

console.log(`Solution: ${run(input)}`);



