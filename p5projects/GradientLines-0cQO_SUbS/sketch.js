function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(3);
  
  p5GradientLine(0, 0, width, height,color(0), color(255));
}

function canvasGradientLine(x1, y1, x2, y2, color1, color2) {
  
  // linear gradient in direction of line (html5 canvas)
  var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);

  this.drawingContext.strokeStyle = grad;

  line(x1, y1, x2, y2);
}

function p5GradientLine(x1, y1, x2, y2, c1, c2, sz=3) {
  
  // use circles/lerp to draw the line in p5
  const d = dist(x1, y1, x2, y2);
  for (let i = 0; i < d; i++) {
    const step = map(i, 0, d, 0, 1);
    const x = lerp(x1, x2, step);
    const y = lerp(y1, y2, step);
    const c = lerpColor(c1, c2, step);
    fill(c);
    noStroke();
    ellipse(x, y, sz, sz);
  }
}