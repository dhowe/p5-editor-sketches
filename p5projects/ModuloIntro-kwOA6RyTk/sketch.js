let cells = [];

function setup() {
  createCanvas(500, 400);
  noFill();
  let sz = 50;

  // do 1 row at a time, going down
  for (let j = 0; j < 8; j++) {
    // do 1 row
    for (let i = 0; i < 10; i++) {
      let xpos = map(i, 0, 9, 0, width - sz);
      let ypos = map(j, 0, 7, 0, height - sz);
      let cell = {
        x: xpos,
        y: ypos,
        size: sz,
      };
      if (j % 2 === 0) {
        cell.x += sz / 2;
      }

      cells.push(cell);
    }
  }
  console.log(cells);
}

function draw() {
  background(220);

  for (let i = 0; i < cells.length; i++) {
    let c = cells[i];
    fill(255);
    if (i % 4 === 0) {
      fill(0);
    }
    if (i % 4 === 1) {
      fill(100);
    }
    if (i % 4 === 2) {
      fill(200);
    }
    rect(c.x, c.y, c.size);
  }
}
