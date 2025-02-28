
function setup() {
  createCanvas(600, 400);
}

function draw() {
  let num = frameCount % 256;
  let bg = 0;
  if (num > 128) {
    bg = 255;
  }
  background(bg);
}
