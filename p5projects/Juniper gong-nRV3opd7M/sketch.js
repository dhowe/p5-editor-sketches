let x = [100],
  y = [200],
  xspd = [3],
  yspd = [3],
  radius = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  background(0);

  drawBalls();
  updateBalls();
  checkCollisions();

  if (mouseIsPressed) {
    addNewBall();
  }
}

// draw each ball in a loop
function drawBalls() {
  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], 20);
  }
}

// update each ball in a loop
function updateBalls() {
  for (let i = 0; i < x.length; i++) {
    x[i] += xspd[i];
    y[i] += yspd[i];
  }
}

// check collision with edges of sketch
function checkCollisions() {
  for (let i = 0; i < x.length; i++) {
    // check collision with left/right wall
    if (x[i] >= width - radius || x[i] <= radius) {
      xspd[i] = xspd[i] * -1;
    }

    // check collision with top/bottom wall
    if (y[i] >= height - radius || y[i] <= radius) {
      yspd[i] = yspd[i] * -1;
    }
  }
}

// add new ball
function addNewBall() {
  let spdX = mouseX - pmouseX;
  let spdY = mouseY - pmouseY;
  if (spdX != 0 || spdY != 0) {
    x.push(mouseX);
    y.push(mouseY);
    xspd.push(spdX);
    yspd.push(spdY);
  }
}
