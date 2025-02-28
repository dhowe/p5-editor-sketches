class Grid {
  constructor(gx, gy, cols, rows) {
    this.x = gx;
    this.y = gy;
    this.columns = cols;
    this.rows = rows;
    this.cells = [];
    this.selected = false;
  }
  render() {}
}
class Cell {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.highlighted = false;
  }
  render() {}
}

function createGrid(gx, gy, cols, rows) {
  let grid = new Grid(gx, gy, cols, rows);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let size = 30;
      let x = i * size;
      let y = j * size;
      let cell = new Cell(x, y, size);
      grid.cells.push(cell);
    }
  }
  return grid;
}

function draw() {
  background(220);
  for (let j = 0; j < grids.length; j++) {
    let grid = grids[j];
    let fillcol = 200;
    if (grid.selected) fillcol = 255;
    for (let i = 0; i < grid.cells.length; i++) {
      let cell = grid.cells[i];
      fill(fillcol);
      if (cell.highlighted) fill("red");
      circle(grid.x + cell.x, grid.y + cell.y, cell.size);
    }
  }
}

function mouseReleased() {
  for (let j = 0; j < grids.length; j++) {
    grids[j].selected = false;
  }
}

function mouseDragged() {
  for (let j = 0; j < grids.length; j++) {
    let grid = grids[j];
    if (grid.selected) {
      grid.x += mouseX - pmouseX;
      grid.y += mouseY - pmouseY;
    }
  }
}

function mouseMoved() {
  for (let j = 0; j < grids.length; j++) {
    let grid = grids[j];
    grid.selected = false;
    for (let i = 0; i < grid.cells.length; i++) {
      let cell = grid.cells[i];
      cell.highlighted = false;
      if (
        dist(mouseX, mouseY, grid.x + cell.x, grid.y + cell.y) <
        cell.size / 2
      ) {
        cell.highlighted = true;
        grid.selected = true;
      }
    }
  }
}
