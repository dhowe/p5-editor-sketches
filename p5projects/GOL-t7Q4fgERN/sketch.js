let num = 50;
let g = [], next = [];
let sz, mx = 0, my = 0;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  strokeWeight(.05);
  sz = width / num;
  for (let j = 0; j < num; j++) {
    g[j] = [];
    next[j] = [];
    for (let i = 0; i < num; i++) {
      g[j][i] = 0;
      next[j][i] = 0;
    }
  }

  cell(12, 11, 1);
  cell(13, 11, 1);
  cell(14, 11, 1);
  setInterval(step,50);
}


function draw() {
  background(220);
  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      fill(cell(i, j) ? 0 : 255);
      rect(sz / 2 + i * sz, sz / 2 + j * sz, sz, sz);
    }
  }
}


function mouseMoved() {
  mx = constrain(floor(mouseX/sz), 0, num-1);
  my = constrain(floor(mouseY/sz), 0, num-1);
  cell(mx,my,1);
}

function step() {

  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      let nh = moore(i, j);
      let sum = nh.reduce((acc, c) => acc += c);
      next[j][i] = (cell(i, j) && (sum === 2 || sum === 3)) || // stays on
        (!cell(i, j) && sum === 3) ? 1 : 0; // turns on 
        // turns off
    }
  }

  // swap next to current
  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      g[j][i] = next[j][i];
      next[j][i] = 0;
    }
  }
}

function cell(i, j, val) {
  if (typeof val !== 'undefined') {
    g[j][i] = val;
    return this;
  }
  return g[j][i];
}


//    Any live cell with fewer than two live neighbours dies, as if by underpopulation.
//    Any live cell with two or three live neighbours lives on to the next generation.
//    Any live cell with more than three live neighbours dies, as if by overpopulation.
//    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
function moore(i, j) {
  return [
    cell(i ? i - 1 : num - 1, j ? j - 1 : num - 1), // NW
    cell(i, j ? j - 1 : num - 1), // N
    cell(i ? i - 1 : num - 1, (j + 1) % num), // NE

    cell(i ? i - 1 : num - 1, j), // W
    cell((i + 1) % num, j), // E

    cell((i + 1) % num, j ? j - 1 : num - 1), // SW
    cell(i, (j + 1) % num), // S
    cell((i + 1) % num, (j + 1) % num) // SE
  ];
}