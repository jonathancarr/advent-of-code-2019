// Actual solution

const run = (input) =>  {
  const vals = input.split(",").map(str => parseInt(str));
  let index = 0;
  let inputNum = 5;

  const parseOpcode = val => val % 100;

  const parseParamModes = val =>
    val.toString().substring(0, val.toString().length - 2).split('').reverse();

  const parseParam = (index, mode) => mode == 1 ? vals[index] : vals[vals[index]];

  const parseAddition = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    const n3 = parseParam(index + 3, 1);
    vals[n3] = n1 + n2;
    index += 4;
  }

  const parseMultiply = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    const n3 = parseParam(index + 3, 1);
    vals[n3] = n1 * n2;
    index += 4;
  }

  const parseInput = (modes) => {
    const n1 = parseParam(index + 1, 1);
    vals[n1] = inputNum;
    index += 2;
  }

  const parseOutput = (modes) => {
    const n1 = parseParam(index + 1, 1);
    console.log(`Output from ${n1}: ${vals[n1]}`);
    index += 2;
  }

  const parseJumpIfTrue = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    index = (n1 != 0) ? n2 : index + 3;
  }

  const parseJumpIfFalse = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    index = (n1 == 0) ? n2 : index + 3;
  }

  const parseLessThan = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    const n3 = parseParam(index + 3, 1);
    vals[n3] = (n1 < n2) ? 1 : 0;
    index += 4;
  }

  const parseEquals = (modes) => {
    const n1 = parseParam(index + 1, modes[0]);
    const n2 = parseParam(index + 2, modes[1]);
    const n3 = parseParam(index + 3, 1);
    vals[n3] = (n1 == n2) ? 1 : 0;
    index += 4;
  }

  const parseTerminate = () => console.log("Program ended")

  const operations = {
    [1] : parseAddition,
    [2] : parseMultiply,
    [3] : parseInput,
    [4] : parseOutput,
    [5] : parseJumpIfTrue,
    [6] : parseJumpIfFalse,
    [7] : parseLessThan,
    [8] : parseEquals,
    [99]: parseTerminate,
  };

  while(vals[index] != 99) {
    const opcode = parseOpcode(vals[index]);
    const modes = parseParamModes(vals[index]);
    operations[opcode](modes);
  }

  return vals[0]
}

const input = require('fs').readFileSync('input.txt', 'utf8');

run(input);


