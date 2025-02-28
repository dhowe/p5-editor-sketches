

let ruleNum = 30;
let sz = 4;
let rules;
let lineIdx = 0;
let matrix

function setup() {
  createCanvas(400, 500);
  background(255);
  noLoop();
  matrix = new Grid(4,0);
  //return;
  //console.log(matrix.cols/2);
  matrix.cells[50][0] = 1;
  //matrix[floor(matrix[0].length/2)][0] = 1;
  //console.log(matrix[0].reduce((a,c) => a + '' + c));
  rules = decToBin(ruleNum);
}

function mouseClicked() {
  console.log('len'+matrix[lineIdx].length);
  // evaluate rules in next, then swap grids
  ++lineIdx;
    console.log('len'+matrix[lineIdx].length);

  for (let i = 0; i < matrix[lineIdx-1].length; i++) {
    let left = matrix[lineIdx-1][(i - 1 + grid.length) % grid.length];
    let center = matrix[lineIdx-1][i];
    let right = matrix[lineIdx-1][(i + 1) % grid.length];
  
    matrix[lineIdx][i] = doRule(left, center, right);
    if (left||center||right) console.log('val',matrix[lineIdx][i]);
    //if (matrix[lineIdx][i]) console.log('hit');
  }
  console.log(matrix[lineIdx].reduce((a,c) => a + '' + c));
}

function doRule(left, center, right) {
  let res = -1;
  if (left === 1 && center === 1 && right === 1) res = rules[0];
  if (left === 1 && center === 1 && right === 0) res = rules[1];
  if (left === 1 && center === 0 && right === 1) res = rules[2];
  if (left === 1 && center === 0 && right === 0) res = rules[3];
  if (left === 0 && center === 1 && right === 1) res = rules[4];
  if (left === 0 && center === 1 && right === 0) res = rules[5];
  if (left === 0 && center === 0 && right === 1) res = rules[6];
  if (left === 0 && center === 0 && right === 0) res = rules[7];
  return parseInt(res);
}

function draw() {
  background(255);
  matrix.draw();
}

function drawx() {
  //step();
  background(255);
  let s = '';
  for (let i = 0; i < matrix.length; i++) {
    let i = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[0][j] === 1) {
        //console.log('hit'+j,i)
        fill(0);
        square(j * sz, i*sz, sz);
      }
    }
  }
  //if (matrix[1][0]) console.log(s);
}

function drawX() {
  step();
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === 1) {
      fill(0);
      square(i * sz, y, sz);
    }
  }
}

function decToBin(num) {
  let bin = Number(ruleNum).toString(2);
  while (bin.length < 8) bin = "0" + bin;
  return bin;
}

