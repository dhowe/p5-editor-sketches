let cells = [];

function setup() {
  createCanvas(500, 400);
  background(255);
  noFill();
  let sz = 50;
  // do 1 row at a time, going down
  for (let j = 0; j < 8; j++) {
    // do 1 row
    for (let i = 0; i < 10; i++) {
      let xpos = map(i, 0, 9, 0, width - sz);
      let ypos = map(j, 0, 7, 0, height - sz);
      fill((i+j) % 2 * 255);
      rect(xpos, ypos, sz);
    }
  }
}
