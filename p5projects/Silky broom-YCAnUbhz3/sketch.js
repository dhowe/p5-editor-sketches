function setup() {
  createCanvas(320, 320);
//  frameRate(5);
}

function draw() {
  background(235);
  for (let i = 0; i < 50; i++) {
    let y = map(i, 0, 49, 0, height);
    stroke(0);
    strokeWeight(1);
    line(0, 0, width, y);
  }
  stroke(200, 0, 0);
  strokeWeight(2);
  line(0, 0, width, frameCount % height);
}
