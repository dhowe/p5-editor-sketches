let img;

// MAKE basic version
// NEXT-stop after 1 or 2 rotations ?

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(540, 270);
  img.resize(270, 270);
  img.loadPixels();
  noStroke();
}

function draw() {
  image(img, random(-5, 5), random(-5, 5), width, height);
  fill(0, 200);
  let offset = map(noise(20 + frameCount / 500), 0, 1, -30, 70);
  rect(0, 0, width / 2 + offset, height);
  fill(155, 190);
  rect(width / 2 + offset, 0, width / 2 - offset, height);

  for (let y = 0; y < height; y++) {
    let xIdx = floor(img.width / 2 + offset);
    col = img.get(xIdx - 50 + (((frameCount / 100) * y) % 100), y);
    let [r, g, b, a] = col;
    stroke(r, g, b, a * 0.7);
    line(0, y, width, y);
  }
  filter(BLUR);
}

