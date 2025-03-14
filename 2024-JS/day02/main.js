const { readFileSync } = require('fs');

let nSafe = 0;

// Parse the input into an array, splitting each new line into an element, and then furter splitting each line into its individual values
const lines = readFileSync('input.txt', 'utf8').split(/\n/);
const reports = lines.map((e) => e.split(' ').map(Number));

// To count the number of safe reports:
// We first evaluate if the current report is ascending or not (descending).
// Then, going through each element of the report, we make sure it follows the same ascending or descending trend, and that the difference with the previous element is not lower than 0 or greater than 3
// If we made it through the whole report, then we increment our count of safe reports
reports.forEach((curReport) => {
  const curReportLength = curReport.length;
  const isAsc = curReport[1] > curReport[0];

  for (let i = 1; i < curReportLength; i++) {
    const dif = curReport[i] - curReport[i - 1];

    if ((isAsc && dif > 0 && dif < 4) || (isAsc === false && dif < 0 && dif > -4)) {
      if (i == curReportLength - 1) nSafe++;
      continue;
    } else {
      break;
    }
  }
});

console.log('Part 1:');
console.log(nSafe, 'reports are safe.');
