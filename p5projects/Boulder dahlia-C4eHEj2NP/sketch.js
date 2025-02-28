let cells = [];

function setup() {
  createCanvas(500, 400);
  noFill();
  let sz = 50;

  // do 1 row at a time, going down
  for (let j = 0; j < 8; j++) {
    // do 1 row
    for (let i = 0; i < 10; i++) {
      let x = map(i, 0, 9, 0, width - sz);
      let y = map(j, 0, 7, 0, height - sz);
      let cell = {
        xpos: x,
        ypos: y,
        size: sz,
      };
      cells.push(cell);
    }
  }
  console.log(cells);
}

function draw() {
  background(220);
  for (let i = 0; i < cells.length; i++) {
    let c = cells[i];
    c.xpos += random(-1,1);
    c.ypos += random(-1,1);
    rect(c.xpos, c.ypos, c.size);
    
  }
}
