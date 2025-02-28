
let cells = [];
function setup() {
  createCanvas(500, 400);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = {x:j*50, y: i*50, sz: 50 };
      cells.push(cell);
    }
  }
}

function draw() {
  background(245);
  for (let i = 0; i < cells.length; i++) {
    let c = cells[i];
    fill('white');
    if (mouseX > c.x && mouseX < c.x + c.sz 
        && mouseY > c.y && mouseY < c.y + c.sz) {
      fill('red')
    }
    square(c.x, c.y, c.sz)
  }
}
