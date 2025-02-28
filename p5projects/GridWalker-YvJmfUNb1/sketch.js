let x, y, grid, rows, cols;
let step = 10;

function setup() {
  createCanvas(400, 500);
  background(255);
  rows = height / step;
  cols = width / step;
  x = floor(cols/2);
  y = floor(rows/2);
  grid = array2d(cols, rows);
}

function draw() {
  background(255);
  
  // update
  let flip = floor(random(4));
  if (flip === 0) {
    x = (x + cols + 1) % cols;
  } else if (flip === 1) {
    x = (x + cols - 1) % cols;
  } else if (flip === 2) {
    y = (y + rows + 1) % rows;
  } else if (flip === 3) {
    y = (y + rows - 1) % rows;
  }
  grid[x][y] += step;
  
  // draw
  noStroke();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      fill(255-grid[i][j]);
      circle(i*step+step/2,j*step+step/2,step);
    }
  }
}

function array2d(cols, rows, val=0) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}
