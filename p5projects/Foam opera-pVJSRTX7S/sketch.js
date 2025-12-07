let x = [100], y = [200], xspd = [3], yspd = [3], radius = 10;        

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], radius * 2);

    // update position based on speed
    x[i] = x[i] + xspd[i];
    y[i] = y[i] + yspd[i];

    // check collision with left/right wall
    if (x[i] >= width - radius ||x[i] <= radius) {
      xspd[i] = xspd[i] * -1;
    }

    // check collision with top/bottom wall
    if (y[i] >= height - radius || y[i] <= radius) {
      yspd[i] = yspd[i] * -1;
    }
  }

 if (mouseIsPressed) {     // add a new ball
    x.push(mouseX);
    y.push(mouseY);
    xspd.push(mouseX - pmouseX);
    yspd.push(mouseY - pmouseY);
  }
}