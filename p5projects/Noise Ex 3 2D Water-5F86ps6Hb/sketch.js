// Water via the 2D version of noise()

function setup() {
  createCanvas(400, 400);
  stroke('#2E6FED')
  
}
function draw() {
background(255);
  for (let x = 0; x < width; x++) {
    let y = height / 4 + (noise(x/200, frameCount/300) * height) / 2;
    line(x, y, x, height);
  }
}
