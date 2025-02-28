let rule = 30; // change me

let cellSz = 4, allRows = [], ruleTable = {}, numCols, numRows;
let states = ['111', '110', '101', '100', '011', '010', '001', '000'];

function setup() {
  let w = floor(windowWidth / cellSz) * cellSz;
  let h = floor(windowHeight / cellSz) * cellSz;
  
  // get the biggest even size possible
  createCanvas(w % 2 ? w : w - cellSz, h);
  noStroke();

  // set up the ruleTable
  let ruleStr = decToBin(rule);
  states.forEach((state, i) => ruleTable[state] = ruleStr[i]);

  // get the size of our grid
  numCols = floor(width / cellSz);
  numRows = floor(height / cellSz);

  // fill array for our first row
  let firstRow = Array(numCols).fill(0);
  firstRow[floor(numCols / 2)] = 1; // center cell = 1
  allRows.push(firstRow);
}

function draw() {
  background(0);
  for (let i = 0; i < allRows.length; i++) {
    let theRow = allRows[i];
    for (let j = 0; j < theRow.length; j++) {
      if (theRow[j] == 0) {
        square(j * cellSz, i * cellSz, cellSz);
      }
    }
  }
  step();
}

function step() {

  // compute next generation 
  let next = [];
  let current = allRows[allRows.length - 1]; // last row
  for (let i = 0; i < current.length; i++) {
    let left = current[(i - 1 + current.length) % current.length];
    let right = current[(i + 1) % current.length];
    let input = left + '' + current[i] + right;
    next[i] = ruleTable[input];
  }
  
  // add it to all array of rows 
  allRows.push(next);
  
  // if we have more than we can fit, throw away the oldest
  if (allRows.length > numRows) {
    allRows.shift();
  }
}

// convert number (0-255) to 8-char binary string (eg '01101100')
function decToBin(dec) {
  return dec.toString(2).padStart(8, '0');
}
