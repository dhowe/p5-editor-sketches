let x = 50, y = 50, sw = 2, grid, px, py;

/*
 * recode of "Random Walk Through Raster" by Frieder Nake, 1966
 */
function setup() {

  createCanvas(400, 400);
  background(255);
  noFill();
  noLoop();
  strokeWeight(sw);
  strokeCap(PROJECT);
  draw();
}

function draw() {
  px = py = 0;
  grid = Array(x + 1).fill().map(() => Array(y + 1).fill(0));
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      drawCell(j, i);
    }
  }
  step();
}

function drawCell(j, i) {
  let cellSz = min(width, height) / x;

  // skip one row/col around edge
  if (i > 0 && j < y - 1 && i < y - 1 && i < x - 1 && j < x - 1) {

    let off = 0;
    stroke(0);
    if (!exists(j, i, 1)) {
      stroke(255); // erase
      if (j > 1) off = sw;
    }

    if (j > 0) line(j * cellSz + off, cellSz + i * cellSz, // horiz 
      (j + 1) * cellSz - 1, cellSz + i * cellSz);

    off = 0;
    stroke(0);
    if (!exists(j, i, 2)) {
      stroke(255); // erase
      if (i > 1) off = sw;
    }
    line(cellSz + j * cellSz, i * cellSz + off, // vert 
      cellSz + j * cellSz, (i + 1) * cellSz);
  }
}

function step() {
  let dirs = (random() < 0.9) ? [1] : [2, 1];
  let idx = floor(random(dirs.length)), dir = dirs[idx];
  if (exists(px, py, dir)) grid[px][py] += dir;

  let d = dist(px, 0, py, 0) / x;
  if (random() < d && exists(px, py, 2)) grid[px][py] += 2;
  drawCell(px, py);

  if (++px % x == 0) {
    px = 0;
    ++py;
  }
  setTimeout((py < y - 1 || px < x - 1 ? step : draw), 1);
}

function exists(j, i, dir) {
  return dir == 2 ? grid[j][i] < 2 : grid[j][i] % 2 == 0;
}
