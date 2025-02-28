let ruleNum = 30;
let y = 0;
let rules;
let next = [];
let grid = new Array(100);

function setup() {
  createCanvas(400, 400);
  background(255);
  //noLoop();
  grid.fill(0);
  grid[floor(grid.length / 2)] = 1;
  rules = decToBin(ruleNum);
}

function step() {
  
  // evaluate rules in next
  for (let i = 0; i < grid.length; i++) {
    let left = grid[(i - 1 + grid.length) % grid.length];
    let center = grid[i];
    let right = grid[(i + 1) % grid.length];
    next[i] = doRule(left, center, right);
  }
  
  // then swap grids
  grid = next;
  next = [];
  y += 4;
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
  step();
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] !== 0) {
      fill(0);
      square(i * 4, y, 4);
    }
  }
}

function decToBin(num) {
  let bin = Number(ruleNum).toString(2);
  while (bin.length < 8) bin = "0" + bin;
  return bin;
}
