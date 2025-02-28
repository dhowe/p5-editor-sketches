let r1 = 100, g1 = 200, b1 = 100;
let r2 = 200, g2 = 100, b2 = 100;

function setup() {
  createCanvas(400, 250);
  noStroke();
  let i = 0;
  while (i < 100) {
    let r = r1 + 1;
    let g = g1 - 1;
    let b = b1;
    //fill(r, g, b);
    rect(i*4, 0, 4, 200)
    i++;
  }
  fill(r1,g1,b1);
  rect(0,200,20,50);
  fill(r2,g2,b2);
  rect(380,200,20,50);
}
