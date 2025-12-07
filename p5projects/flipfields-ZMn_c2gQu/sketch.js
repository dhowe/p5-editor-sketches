let offscreen, border = 100;

function setup() {
  createCanvas(1780, 800);
  offscreen = createGraphics(900, 800);
}

function draw() {
  background(255, 32);
  drawFlowField(offscreen);
  drawFlippedBuffer(offscreen);
  drawDivider();
}

function drawFlowField(buffer) {
  buffer.clear();
  buffer.stroke(0, 48);
  
  let cellSize = 10;
  for (let i = 0; i < 80; i++) {
    for (let j = 0; j < 60; j++) {
      // map stroke weight to distance from edge of screen
      buffer.strokeWeight(map(i, 0, 480, 0.001, 2));
      let x = i * cellSize + border, y = j * cellSize + border;
      let oldX = x;
      let oldY = y;
      let len = cellSize * .6;
      let ns = 0.01;
      for (let k = 0; k < 10; k++) {
        let angle = noise(oldX * ns * .99, oldY * ns, frameCount * 0.001) * TWO_PI;
        let newX = oldX + cos(angle) * len;
        let newY = oldY + sin(angle) * len;
        buffer.line(oldX, oldY, newX, newY);
        oldX = newX;
        oldY = newY;
      }

    }
  }
  image(offscreen, 0, 0);
}

function drawDivider() {
  noStroke();
  fill(80, 40, 45, 200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(sin(frameCount * 0.01) * 0.001);
  translate(-width / 2, -height / 2);
  rect(width / 2, height / 2, 80, height - 100, 3);
}

function drawFlippedBuffer(buf) {
  push();
  scale(-1, 1); // reverse the x axis
  image(buf, -width, 0); // draw flipped buffer
  pop();
}