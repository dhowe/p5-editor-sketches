let cellsz = 10, cols, rows;
let curr, next; // grids

function setup() {
  
  createCanvas(700, 700);

  // calculate cols and rows
  cols = floor(width / cellsz);
  rows = floor(height / cellsz);

  // create 2D arrays
  curr = Array(rows).fill().map(() => Array(cols).fill(0));
  next = Array(rows).fill().map(() => Array(cols).fill(0));
  
  init();
}

function mousePressed() {
  init();
}

function draw() {
  background(255);
  update();
  for (let i = 0, w = cellsz; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      
      stroke(0);
      fill(curr[i][j] ? 0 : 255);
      rect(i * w, j * w, w - 1, w - 1);
    }
  }
}

function init() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      curr[i][j] = next[i][j] = 0;
      if (i != 0 && j != 0 && i != cols - 1 && j != rows - 1) {
        curr[i][j] = random() < 0.1 ? 1 : 0;
      }
    }
  }
}

function neighbors(a, b) {
  let num = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let x = (a + i + rows) % rows; // wrapping
      let y = (b + j + cols) % cols; // wrapping
      if (i != 0 || j != 0) num += curr[x][y];
    }
  }
  return num;
}

function update() {

  // loop through each cell in the grid
  for (let x = 0; x < cols ; x++) {
    for (let y = 0; y < rows ; y++) {

      let count = neighbors(x, y); // check neighborhood

      next[x][y] = curr[x][y]; // stasis
      
      // rules of the gol (from shiffman)
      if (curr[x][y] == 1 && count < 2) next[x][y] = 0;       // loneliness
      else if (curr[x][y] == 1 && count > 3) next[x][y] = 0;  // overpopulation
      else if (curr[x][y] == 0 && count == 3) next[x][y] = 1; // reproduction
    }
  }

  // swap grids
  let temp = curr;
  curr = next;
  next = temp;
}