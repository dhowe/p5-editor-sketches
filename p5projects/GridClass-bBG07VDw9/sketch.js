let grid;

function setup() {
  createCanvas(500, 400);
  background(255);
  grid = new Grid(10);
  grid.draw();
}

function draw() {
  background(255);
  grid.draw();
}

function keyPressed() {
  grid.clear();
}

function mouseClicked() {
  grid.setCellAt(mouseX, mouseY, 1);
}

class Grid {
  constructor( // convert to options obj
    cellSize = 4,
    cellValue = 0,
    pixelWidth = width,
    pixelHeight = height,
    xOffset = 0, // gridX() / gridY() not yet working with offsets
    yOffset = 0
  ) {
    this.xoff = 0;//xOffset;
    this.yoff = 0;//yOffset;
    this.cellSize = cellSize;
    this.width = pixelWidth;
    this.height = pixelHeight;
    this.cols = floor(pixelWidth / cellSize);
    this.rows = floor(pixelHeight / cellSize);
    this.cells = [...Array(this.cols)].map((x) => Array(this.rows).fill(cellValue));
  }

  clear(val = 0) {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.cells[x][y] = val;
      }
    }
  }

  draw() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        noFill();
        stroke(220);
        if (this.cells[x][y]) fill(200, 0, 0);
        square(this.xoff + x * this.cellSize, this.yoff + y * this.cellSize, this.cellSize);
      }
    }
  }

  getCellAt(pixelX, pixelY) {
    return this.cells[this.gridX(pixelX)][this.gridY(pixelY)];
  }

  setCellAt(pixelX, pixelY, value) {
    this.cells[this.gridX(pixelX)][this.gridY(pixelY)] = value;
  }

  pixelX(gridX) {
    return gridX * this.cellSize;
  }

  pixelY(gridY) {
    return gridY * this.cellSize;
  }

  gridX(pixelX) {
    return floor((constrain(pixelX, this.xoff, this.width) - this.xoff) / this.cellSize);
  }

  gridY(pixelY) {
    return floor((constrain(pixelY, this.yoff, this.height) - this.yoff) / this.cellSize);
  }
}
