let num = 25;
let numOps = 5;
let sz = 0;
let g = [];

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  noStroke();
  frameRate(1000);
  sz = width / num;
  for (let j = 0; j < num; j++) {
    g[j] = [];
    for (let i = 0; i < num; i++) {
      g[j][i] = discretize(random(), numOps);
    }
  }
}

function discretize(val, numOps) {
  return floor(val / (1 / numOps));
}

function draw() {
  if (frameCount === 1) {
    background(220);
    for (let j = 0; j < num; j++) {
      for (let i = 0; i < num; i++) {
        render(i,j);
      }
    }
  }
  let i = floor(random(num));
  let j = floor(random(num));
  update(i,j);
  render(i,j);
}

let mx=0,my=0;
function mouseClicked() {
  mx = constrain(floor(mouseX/sz), 0, num-1);
  my = constrain(floor(mouseY/sz), 0, num-1);
  update(mx,my);
  render(mx,my);
}

function render(i, j) {
  
  fill(map(cell(i, j), 0, numOps - 1, 0, 255));
  rect(sz / 2 + i * sz, sz / 2 + j * sz, sz, sz);
}

function update(i, j) {
  let vn = vneumann(i, j);
  let avg = vn.reduce((acc, v) => acc += v) / vn.length;
  let op = discretize(avg/(numOps-1), numOps);
  cell(i, j, op);
}

function cell(i, j, val) {
  if (typeof val !== 'undefined') {
    g[j][i] = val;
    return this;
  }
  return g[j][i];
}


function dumpN(i, j) {
  let k = moore(i, j);
  print(k);
  let sum = k.reduce((acc, c) => acc += c, 0);
  let s = '';
  s += k[0] + ' ' + k[1] + ' ' + k[2] + '\n';
  s += k[3] + ' ' + sum + ' ' + k[4] + '\n';
  s += k[5] + ' ' + k[6] + ' ' + k[7];
  console.log(s);
}

function dump(k) {
  let s = '';
  for (let j = 0; j < num; j++) {
    for (let i = 0; i < num; i++) {
      s += k[j][i] + ' '; // = moore(i, j) ? 1 : 0;
    }
    s += '\n';
  }
  console.log(s);
}

let vna;
function vneumann(i, j) { // cell, top, right, bottom, left
  vna = [
    cell(i, j), // CELL
    cell(i, j ? j - 1 : num - 1), // N
    cell((i + 1) % num, j), // E
    cell(i, (j + 1) % num), // S
    cell(i ? i - 1 : num - 1, j), // W
  ];
  return vna;
}