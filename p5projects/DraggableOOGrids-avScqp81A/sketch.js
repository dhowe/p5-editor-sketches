let grids = [];

function setup() {
  createCanvas(900, 700);
  grids.push(createGrid(100, 100, 7, 6));
  grids.push(createGrid(600, 300, 5, 6));
  grids.push(createGrid(300, 600, 9, 2));
  grids.push(createGrid(700, 50, 2, 2));
}

