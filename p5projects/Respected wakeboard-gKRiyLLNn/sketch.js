let x = [100],
  y = [200],
  xspd = [3],
  yspd = [3],
  radius = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    ellipse(x[i], y[i], radius * 2, radius * 2);

    // update the position based on speed
    x[i] = x[i] + xspd[i];
    y[i] = y[i] + yspd[i];

    // check collision with left/right wall
    if (
      (xspd[i] > 0 && x[i] >= width - radius) ||
      (xspd[i] < 0 && x[i] <= radius)
    ) {
      xspd[i] = xspd[i] * -1;
    }

    // check collision with top/bottom wall
    if (
      (yspd[i] > 0 && y[i] >= height - radius) ||
      (yspd[i] < 0 && y[i] <= radius)
    ) {
      yspd[i] = yspd[i] * -1;
    }
  }
  
  if (mouseIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
    xspd.push(mouseX-pmouseX);
    yspd.push(mouseY-pmouseY);
  }
}
