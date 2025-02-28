let n = 0,d = 0;

function setup() {
  createCanvas(255, 255);
}
function draw() {

  let y = n;
  for (var i = 0; i < width; i++) {
    let x = n;
    for (var j = 0; j < height; j++) {
      var c = random(255);
      d = noise(x, y) * 255;
      set(i, j, d);
      x += 0.005;
    }
    y += 0.005;
  }
  updatePixels();
  n+= d/10000;
}