let x = [], y = [], xspd = [], yspd = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function mouseDragged() {
  x.push(mouseX);
  y.push(mouseY);
  xspd.push(random(-1, 1));
  yspd.push(random(-2, -4));
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    
    fill(255, 255 - y[i] / 2);
    text("O", x[i], y[i]);
    
    x[i] = x[i] + xspd[i];
    y[i] = y[i] + yspd[i];
    
    yspd[i] += 0.098; // gravity
  }
}
