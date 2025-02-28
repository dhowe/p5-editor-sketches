
// Recode of Nees' Shotter, 1968
function setup() {
  createCanvas(550, 900);
  background(255);
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(1.5);
  stroke(0);
  noFill();
  translate(60, 40);

  let sz = 38;
  for (let j = 0; j < 22; j++) {
    let maxRot = map(j, 0, 19, 1, 45);             // max-rotation
    let maxOff = map(j, 1, 19, 0.4, sz/3, true);  // max-offset
    for (let i = 0; i < 12; i++) {
      let rot = random(-maxRot, maxRot);        // rotate
      let xOff = random(-maxOff*2, maxOff*2);  // left-right
      let yOff = random(-maxOff*2, maxOff);   // up-down
      push();
      translate(i * sz + xOff, j * sz + yOff);
      rotate(rot);
      square(0, 0, sz);
      pop();
    }
  }
}
