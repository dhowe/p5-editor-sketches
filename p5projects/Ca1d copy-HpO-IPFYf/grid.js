class Grid {
  constructor(cellSize = 4, val = 0) {
    this.cellSize = cellSize;
    this.cols = floor(width / cellSize);
    this.rows = floor(height / cellSize);
    this.cells = [...Array(this.cols)].map((y) =>
      Array(this.rows).fill(val)
    );
    console.log(this);
  }
  draw() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        noFill();
        stroke(220);
        if (this.cells[x][y]) fill(0);
        square(x * this.cellSize, y * this.cellSize, this.cellSize);
      }
    }
  }
}