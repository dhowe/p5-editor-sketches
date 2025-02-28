function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220,16);
  let lineLen = map(sin(frameCount), -1, 1, 0, 300);
  sqline(width / 4, height / 4, lineLen);
  sqline(width * .75, height / 4, lineLen);
  sqline(width / 4, height  * .75, lineLen);
  sqline(width * .75, height  * .75, lineLen);
}

function sqline(x, y, lineLen) {
  push();
  translate(x, y);
  rotate(frameCount);
  fill(0,32)
  square(0, 0, 300 - lineLen);
  line(-lineLen / 2, -lineLen / 2, lineLen / 2, lineLen / 2);
  pop();
}
