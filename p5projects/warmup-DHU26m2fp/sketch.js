let cells = [];

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sz = 44;
    this.shape = "square";
  }
  render() {
    if (this.shape === "square") {
      square(this.x, this.y, this.sz);
    } else {
      
      circle(this.x, this.y, this.sz);
    }
  }
}

function setup() {
  createCanvas(350, 400);
  rectMode(CENTER);
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 7; x++) {
      cells.push(new Cell(25 + x * 50, 25 + y * 50));
    }
  }
}

function mouseClicked() {
  cells.forEach(c => {
    c.shape = 'square';
    if (random()<.2) c.shape = 'circle';
  });
}

function draw() {
  background(245);
  for (let y = 0; y < cells.length; y++) {
    cells[y].render();
  }
}
