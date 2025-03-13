const { readFileSync } = require('fs');

const left = [];
const right = [];
let distance = 0;
let score = 0;

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

// To get the total distance between each element in both lists:
// Go through every element of both list and substract them to each other
// Get the absolute value and add it to the total distance variable
for (let i = 0; i < left.length; i++) {
  const curLeft = left[i];
  const curRight = right[i];

  distance += Math.abs(curLeft - curRight);
}

// To get the similarity score between the two lists:
// Go through the left list and for each of its elements, find if it exists in our right list by looking for its index
// Since our lists are ordered, we iterate our right list looking for other similar elements
// When we find a different element, then we add our current element value multiplied by the number of times it appeared to our total score
left.forEach((e) => {
  const indexOfE = right.findIndex((a) => a == e);

  if (indexOfE != -1) {
    let n = 1;
    for (let i = indexOfE + 1; i < right.length; i++) {
      if (right[i] != e) {
        break;
      }
      n++;
    }
    score += e * n;
  }
});

console.log('Part 1 :');
console.log('The total distance between the two lists is: ', distance);

console.log('Part 2 :');
console.log('The similarity score between the two lists is: ', score);
