let font;

function preload() {
  font = loadFont('inconsolata.otf');
}

function setup() {
  createCanvas(400, 400);

  background(200);

  // Get the point array.
  let points = font.textToPoints('p5*js', 26, 240, 135, { sampleFactor:  0.1 });

  // Draw a dot at each point.
  for (let p of points) {
    point(p.x, p.y);
  }
}