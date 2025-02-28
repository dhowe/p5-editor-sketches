let value = 0;

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(200);

  fill(value);
  square(25, 25, 50);
}

function mouseMoved() {
  // Update the grayscale value.
  value += 5;

  // Reset the grayscale value.
  if (value > 255) {
    value = 0;
  }
}
