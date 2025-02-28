let matrix, next; // 2d arrays [rows][cols]
let sz, cols, rows;


function setup() {
  createCanvas(900, 600);
  strokeWeight(0.1);
  textAlign(CENTER, CENTER);
  //noLoop();
  init();
}

function draw() {
  step();
  
  let gx = floor((mouseX / width) * cols);
  let gy = floor((mouseY / height) * rows);
  if (gx >+ 0 && gx < cols && gy >= 0 && gy < rows) {
    matrix[gy][gx] = 1; // enable cells with mouse
  }
  
  background(255);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      stroke(0);
      noFill();
      let current = matrix[j][i];
      if (current) fill(0, 82);
      square(i * sz, j * sz, sz);
      fill(0);
      text(neighbors(j, i), i * sz + sz / 2, j * sz + sz / 2);
    }
  }
}

function step() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let current = matrix[j][i];
      let num = neighbors(j, i);
      next[j][i] = current; // start with current value
      if (current && num < 2) next[j][i] = 0; // loneliness
      if (current && num > 3) next[j][i] = 0; // overcrowding
      if (!current && num === 3) next[j][i] = 1;// reproduction
    }
  }
  matrix = next;
  next = [...Array(rows)].map((_) => Array(cols).fill(0)); // clear
}

// Moore neighborhood
function neighbors(y, x) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        
        let my = (y + j + rows) % rows;
        let mx = (x + i + cols) % cols;
        count += matrix[my][mx];
      }
    }
  }
  return count;
}

function init() {
  sz = 10;
  lineIdx = 0;
  cols = width / sz;
  rows = height / sz;
  matrix = [...Array(rows)].map((y) => Array(cols).fill(0));
  next = [...Array(rows)].map((y) => Array(cols).fill(0));
  
  // demo [glider, gliderGun, or rpentomino]
  gliderGun.forEach(([y,x]) => matrix[y][x] = 1);
}

let glider = [[9,20], [10,21], [11,19], [11,20], [11,21]] ;
let gliderGun =[[9,34], [10,32], [10,34], [11,22], [11,23], [11,30], [11,31], [11,44], [11,45], [12,21], [12,25], [12,30], [12,31], [12,44], [12,45], [13,10], [13,11], [13,20], [13,26], [13,30], [13,31], [14,10], [14,11], [14,20], [14,24], [14,26], [14,27], [14,32], [14,34], [15,20], [15,26], [15,34], [16,21], [16,25], [17,22], [17,23]] ;
//let rpentomino = [[9,10], [9,11], [10,9], [10,10], [11,10]] ;
