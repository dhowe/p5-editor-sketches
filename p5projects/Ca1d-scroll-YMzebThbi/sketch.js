let ruleNum = 89;

// click to advance to next rule

let sz, rules, matrix, cols, rows, lineIdx;

function setup() {
  createCanvas(900, 600);
  init();
}

function draw() {
  background(255);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (matrix[j][i] !== 0) {
        fill(0);
        square(i * sz, j * sz, sz);
      }
    }
  }
  rect(width - 20, 0, 20, 20);
  fill(255);
  text(ruleNum, width - 16, 14);

  step();
}

function mouseClicked() {
  init();
}

function init() {
  sz = 4;
  lineIdx = 0;
  cols = width / sz;
  rows = height / sz;
  matrix = [...Array(rows)].map((y) => Array(cols).fill(0));
  matrix[0][floor(cols / 2)] = 1;
  ruleNum = (++ruleNum) % 256;
  console.log(ruleNum)
  rules = decToBin(ruleNum);
}

function step() {
  
  // shift grid if we're past end
  let grid = matrix[lineIdx++];
  if (lineIdx > rows - 1) {
    matrix.shift();
    matrix[rows - 1] = new Array(cols);
    lineIdx = rows - 1;
  }

  // apply the rules
  for (let i = 0; i < grid.length; i++) {
    let left = grid[(i - 1 + grid.length) % grid.length];
    let center = grid[i];
    let right = grid[(i + 1) % grid.length];
    matrix[lineIdx][i] = doRule(left, center, right);
  }
}

function doRule(left, center, right) {
  let num = parseInt("" + left + center + right, 2);
  return parseInt(rules[7 - num]);
}

function decToBin(num) {
  let bin = ruleNum.toString(2);
  while (bin.length < 8) bin = "0" + bin;
  return bin;
}
