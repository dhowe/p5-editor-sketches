let cellsz = 10, qSize = 8;
let curr, next, hist, cols, rows;

// each cell stores its state over the last 8 generations
// adda a tiny bit of randomness for perpetual change

function setup() {

  createCanvas(700, 700);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(cellsz);
  background(255);

  frameRate(30);

  // calculate cols and rows
  cols = floor(width / cellsz);
  rows = floor(height / cellsz);

  // create 2D arrays
  curr = Array(rows).fill().map(() => Array(cols).fill(0));
  next = Array(rows).fill().map(() => Array(cols).fill(0));
  hist = Array(rows).fill().map(() => Array(cols).fill(0));
  
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
      noStroke();
      let x = i * w + w/2, y = j * w + w/2;
      let s = hist[i][j].sum();
      fill(map(s, 1, qSize-1, 255, 0));
      //fill(0);
      if (curr[i][j] && s != qSize && s != qSize/2) {
        rect(x,y,w);
      }
      fill(255);
      text(hist[i][j].sum(), x, y+1);
    }
  }
}

function init() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      curr[i][j] = next[i][j] = 0;
      if (i != 0 && j != 0 && i != cols - 1 && j != rows - 1) {
        curr[i][j] = random() < 0.1 ? 1 : 0; // tmp
      }
    }
  }
}

function neighbors(a, b) {
  let num = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let x = (a + i + rows) % rows; // handle wrapping
      let y = (b + j + cols) % cols;
      if (i != 0 || j != 0) num += curr[x][y];
    }
  }
  return num;
}

function update() {

  // loop through each cell in grid
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {

      let count = neighbors(x, y); // check neighborhood

      // rules of the gol (from shiffman)
      
      if ((curr[x][y] == 1) && (count < 2)) next[x][y] = 0; // loneliness 
      else if ((curr[x][y] == 1) && (count > 3)) next[x][y] = 0; // overpopulation
      else if ((curr[x][y] == 0) && (count == 3)) next[x][y] = 1; // reproduction
      else {
        next[x][y] = curr[x][y]; // stasis
        
        // rule adjustment for perpetual life of species
        if (random()<0.0001) next[x][y] = next[x][y] ? 0 :1;
      }

      hist[x][y] = hist[x][y] || new HistQ(qSize);
      hist[x][y].push(next[x][y]);
    }
  }

  // swap grids
  let temp = curr;
  curr = next;
  next = temp;
}



class HistQ {
  constructor(sz) {
    this.data = [];
    this.capacity = sz;
  }
  push(item) {
    this.data.push(item);
    if (this.data.length > this.capacity) {
      this.data.shift();
    }
  }
  includes(i) {
    return this.data.indexOf(i) > -1;
  }
  map(f) {
    return this.data.map(f);
  }
  sum() {
    //return this.reduce(f => (a,c) => a + c, 0);
    let s = 0;
    for (let i = 0; i < this.data.length; i++) {
      s += this.data[i];
    }
    return s;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  pop() {
    return this.data.pop();
  }
  oldest() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  clear() {
    this.data.length = 0;
    return this;
  }
  toString() {
    return JSON.stringify(this.data);
  }
}