let rows, cols, cells = [], cellSz = 20;

function setup() {
  createCanvas(400, 500);
  rows = height/cellSz;
  cols = width/cellSz;
  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      cells.push(new Cell(x, y, cellSz));
    }
  }  
  cellAt(0,0).value = random(.2,1);
  cellAt(0,rows-1).value = random(.2,1);
  cellAt(cols-1,0).value = random(.2,1);
  cellAt(cols-1, rows-1).value = random(.2,1);
  
  let nx = floor(cols / 2);
  let ny = floor(rows / 2);
  //console.log(cellAt(nx,ny).dist(0,0));
  iterate(nx, ny, 2);
  
  background(245);
  for (let y = 0; y < cells.length; y++) {
    cells[y].render();
  }
}

function fake(x, y, level) {
  console.log('fake()',x,y,level);
}

function iterate(x, y, level) {
  console.log('iterate()',x,y,level);
  let best = cells
    .filter(c => c.value)
    .sort((c,d) => c.dist(x,y) > d.dist(x,y) ? 1 : -1)
    .slice(0,4);
  let avg = best.reduce((acc,c) => acc + c.value, 0) / best.length;
  let center = cellAt(x,y);
  center.value = avg + random(-0.5, 0.5);
  if (level) {
    
    best.forEach(b => {
      let nx = floor((x + b.x)/2);
      let ny = floor((y + b.y)/2);
      iterate(nx, ny);  
    })
  }
  else {
    center.mark();
  }
}

function cellAt(x,y) {
  return cells.find(c => c.x == x && c.y ==y);
  //return cells[y * cols + x];
}

function mouseClicked() {
  cells.forEach((c) => {
  });
}

// function draw() {
//   background(245);
//   for (let y = 0; y < cells.length; y++) {
//     cells[y].render();
//   }
// }

class Cell {
  constructor(x, y, sz) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.value = 0;
  }
  dist(x,y) {
    if (x.sz) {
      y = x.y;
      x = x.x;
    }
    return dist(this.x, this.y, x, y);
  }
  toString() {
    return this.x+','+this.y;//':'+this.value;
  }

  render(col) {
    noStroke();
    if (this.marked) {
      stroke(255,0,0);
    }
    fill(this.value * 255);
    square(this.x*this.sz, this.y*this.sz, this.sz);
  }
  
  mark(col) {
    this.marked = true;
  }
}
