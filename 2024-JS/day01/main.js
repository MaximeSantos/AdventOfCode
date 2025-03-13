const { readFileSync } = require('fs');

const left = [];
const right = [];
let distance = 0;

// Parse the input into an array, splitting each new line into an element
const parsed = readFileSync('input.txt', 'utf8').split(/\n/);

// Split each element into its left and right values, and distribute to their corresponding variable
parsed.forEach((e) => {
  const tmp = e.split('   ');
  left.push(parseInt(tmp[0]));
  right.push(parseInt(tmp[1]));
});

// Reorder the left and right variable in ascending order
left.sort();
right.sort();

// Go through every element of both list and substract them to each other
// Get the absolute value and add it to the total distance variable
for (let i = 0; i < left.length; i++) {
  const curLeft = left[i];
  const curRight = right[i];

  distance += Math.abs(curLeft - curRight);
}

console.log(distance);
