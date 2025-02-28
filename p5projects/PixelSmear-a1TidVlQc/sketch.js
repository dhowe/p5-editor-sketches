let img, k, active = false;

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(540, 270);
  k = random(9999);
  noLoop();
  
  img.resize(270, 270);
  img.loadPixels();
}

function draw() {
  fill(0);
  rect(0, 0, width / 2, height);
  for (let y = 0; y < height; y++) {
    let xIdx = floor(img.width / 2);
    let offset = map(noise(k + y), 0, 1, -50, 50);
    let col = img.get(xIdx + offset, y);
    if (active) col = img.get(xIdx - 50 + (((frameCount / 100) * y) % 100), y);
    let [r, g, b, a] = col;
    stroke(r, g, b, a * 0.7);
    line(0, y, width / 2, y);
  }
  filter(BLUR);
  image(img, width / 2, 0);
  k += 0.001;
}

function mouseClicked() {
  if (!isLooping()) loop();
  else active = !active;
}
