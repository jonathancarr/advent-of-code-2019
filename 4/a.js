const run = (input) =>  {
  const [min, max] = input.split("-").map(str => parseInt(str));

  let count = 0;

  for(let i = min; i<= max; i++) {
    let adjacentNums = false, increasingNums = true;
    const numString = i.toString();
    for (let j = 1; j < numString.length; j++) {
      if (parseInt(numString[j]) < parseInt(numString[j - 1])) increasingNums = false;
      if (numString[j] == numString[j - 1]) adjacentNums = true;
    }
    if (adjacentNums && increasingNums) count++;
  }

  return count;
}

const input = require('fs').readFileSync('input.txt', 'utf8');

console.log(`Solution: ${run(input)}`);


