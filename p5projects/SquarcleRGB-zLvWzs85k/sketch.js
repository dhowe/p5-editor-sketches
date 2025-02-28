function setup() {
  createCanvas(500, 400);
  background(0);
  rectMode(CENTER);
  stroke(255);
  let k = 0;
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 8; i++) {
      let x = 25 + 50 * (i + 1);
      let y = 25 + 50 * (j + 1);
      let sz = 50;
      let val = k % 3;
      if (val == 0) {
        fill("red");
      }
      if (val == 1) {
        fill("blue");
      }
      if (val == 2) {
        fill("green");
      }
      squarcle(x, y, sz);
      k++;
    }
  }
}

function squarcle(x, y, sz) {
  square(x, y, sz);
  circle(x, y, sz);
  square(x, y, (sz / 2) * sqrt(2));
}
