var angle;

function setup() {
  createCanvas(400, 400);
	randomSeed(1);
	angle = PI / 6;
}

function draw() {
  background(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
	line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 8) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}