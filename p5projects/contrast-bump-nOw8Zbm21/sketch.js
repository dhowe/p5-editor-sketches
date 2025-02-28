let img; // adapted from 'cassie'

function preload() {
  img = loadImage("penguin.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  loadPixels();
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      let contrast = 100;
      let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
      //if (x === 0 && y === 0) print(factor);
      var idx = (x + y * width) * 4;
      for (var p = 0; p < 3; p++) {
        pixels[idx+p] = constrain(factor * (pixels[idx+p] - 128) + 128, 0, 255);
      }
    }
  }
  updatePixels();
}
