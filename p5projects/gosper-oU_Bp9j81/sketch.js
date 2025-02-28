let matrix, next, sz = 15, border = 3, gosperGun =[[4,28],[5,26],[5,28],[6,16],[6,17],[6,24],[6,25],[6,38],[6,39],[7,15],[7,19],[7,24],[7,25],[7,38],[7,39],[8,4],[8,5],[8,14],[8,20],[8,24],[8,25],[9,4],[9,5],[9,14],[9,18],[9,20],[9,21],[9,26],[9,28],[10,14],[10,20],[10,28],[11,15],[11,19],[12,16],[12,17]];

function setup() {
  createCanvas(750, 600);
  textAlign(CENTER, CENTER);
  strokeWeight(0.1);

  let cols = floor(width / sz) + border * 2;
  let rows = floor(height / sz) + border * 2;
  matrix = [...Array(rows)].map((y) => Array(cols).fill(0));
  next = [...Array(rows)].map((y) => Array(cols).fill(0));
  
  gosperGun.map(([y, x]) => (matrix[y][x] = 1));
}

function draw() {
  background(255);
  fill(0, 180);
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      let x =  i * sz - (border * sz);
      let y =  j * sz - (border * sz);
      if (matrix[j][i]) square(x, y, sz); // on
      text(neighbors(j, i), x + sz / 2, y + sz / 2);
    }
  }
  step();
}

// compute next and swap grids
function step() {
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[0].length; i++) {
      let current = matrix[j][i];
      let num = neighbors(j, i);
      next[j][i] = current; // start with current value
      if (current && num < 2) next[j][i] = 0; // loneliness
      if (current && num > 3) next[j][i] = 0; // overcrowding
      if (!current && num === 3) next[j][i] = 1; // reproduction
    }
  }
  let swap = matrix;
  matrix = next;
  next = swap;
}

// count Moore neighbors
function neighbors(y, x) { 
  let total = 0, cell = matrix[y][x];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i != 0 || j != 0) {     // don't include current
        let gy = y + i, gx = x + j;
        // don't go off the grid
        if (gx >= 0 && gy >= 0 && gy < matrix.length && gx < matrix[0].length) {
          let neigh = matrix[gy][gx];
          if (neigh) total++;
        }
      }
    }
  }
  return total;
}


