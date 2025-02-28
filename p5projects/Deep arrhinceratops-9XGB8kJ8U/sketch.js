
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  // noLoop();
}
let rx=200, ry=200;
function draw() {
  randomSeed(0);
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = x;
      pixels[index + 1] = random(200,255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  noFill();
  randomSeed(random(9999));
  square(rx+=random(-4,4),ry+=random(-4,4),40);
}