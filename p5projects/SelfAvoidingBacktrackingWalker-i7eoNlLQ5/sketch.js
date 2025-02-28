let x, y, grid, rows, cols;
let step = 20;

function setup() {
  createCanvas(400, 500);
  background(255);
  rows = height / step;
  cols = width / step;
  grid = array2d(cols, rows);
  x = 10;
  y = 10;
  grid[x][y] = 1; // start
  lx = x;
  ly = y;
}

function draw() {

  // compute possible paths
  let options = [];
  if (x < cols-1 && !grid[x+1][y]) options.push(0);
  if (x > 0 && !grid[x-1][y]) options.push(1);
  if (y < rows -1 && !grid[x][y+1]) options.push(2);
  if (y > 0 && !grid[x][y-1]) options.push(3);   
  if (!options.length) {
    console.log('done');
    noLoop();
  }
  
  // pick from the options
  let idx = floor(random(options.length));
  let flip = options[idx];
  if (flip === 0) {
    x = x + 1;
  } else if (flip === 1) {
    x = x - 1;
  } else if (flip === 2) {
    y =  y + 1;
  } else if (flip === 3) {
    y = y - 1;
  }
  grid[x][y] = 1;
  
  // draw the path
  noStroke();

  // draw the current, with line to last
  fill(0);
  circle(lx*step+step/2,ly*step+step/2,step/2);
  fill(200,0,0);
  circle(x*step+step/2,y*step+step/2,step/2);
  stroke(0);
  line(x*step+step/2,y*step+step/2,lx*step+step/2,ly*step+step/2);
  
  lx = x;
  ly = y;
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
