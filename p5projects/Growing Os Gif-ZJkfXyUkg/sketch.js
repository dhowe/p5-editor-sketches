let x = [],
  y = [],
  sz = [];

function setup() {
  createCanvas(400, 400);
  noCursor();
  textAlign(CENTER, CENTER);
  noStroke();
  fill(255);
}

let ft = false;
function mousePressed() {
  if (!ft) {
    saveGif("mySketch", 800, { units: "frames" });
    ft = true;
    return;
  }
  x.push(mouseX);
  y.push(mouseY);
  sz.push(4);
}

function keyPressed() {}

function draw() {
  background(50);
  image(img, mouseX, mouseY);
  for (let i = 0; i < x.length; i++) {
    textSize(sz[i]);
    text("O", x[i], y[i]);
    x[i] += random(-2, 2);
    y[i] += random(-2, 2);
  }

  if (mouseIsPressed) {
    sz[sz.length - 1]++;
  }
}


function preload() {
  img = loadImage('cursor.png');
}
