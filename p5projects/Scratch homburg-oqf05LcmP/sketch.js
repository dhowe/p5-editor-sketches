let x = [],
  y = [],
  xspd = [],
  yspd = [],
  col = [];

function setup() {
  createCanvas(400, 400);
}

function mouseDragged() {

    x.push(mouseX);
    y.push(mouseY);
    xspd.push(random(-0.5, 0.5));
    yspd.push(random(-3, -2));
    col.push(random(255));
}
  let minY = 400;

function draw() {
  background(220);
  for (let i = 0; i < x.length; i++) {
    if (y[i] < minY) {
      x[i] += xspd[i]; // update xpos
      y[i] += yspd[i]; // update ypos

      yspd[i] += 0.098; // gravity
    }
    else {
      if (y[i] <  minY) minY = y[i];
    }


    fill(col[i]);
    textSize(10);
    text("A", x[i], y[i]);
  }
  fill(0);
  textSize(24);
  text(x.length + " " + round(frameRate()), 20, 20);
}