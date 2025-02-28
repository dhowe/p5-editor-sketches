let p0, p1, p2, p3;
let A, B, C;

function setup() {
  createCanvas(400, 400);
  noFill();
  
  p0 = createVector(width * 0.1, height - 30);
  p1 = createVector(width * 0.5, 10);
  p2 = createVector(width * 0.9, height - 30);
}

function draw() {
  background(240);

  let t = map(sin(frameCount / 50), -1, 1, 0, 1);

  A = p5.Vector.lerp(p0, p1, t);
  B = p5.Vector.lerp(p1, p2, t);
  C = p5.Vector.lerp(A, B, t);

  [p0, p1, p2, C].forEach((p) => ellipse(p.x, p.y, 10));
  
  beginShape();
  vertex(p0.x, p0.y); 
  quadraticVertex(p1.x, p1.y, p2.x, p2.y);
  endShape();
}

let selected;
function mousePressed() {
  selected = [p0, p1, p2].find((p) => dist(p.x, p.y, mouseX, mouseY) < 5);
}

function mouseDragged() {
  if (selected) {
    selected.x -= pmouseX - mouseX;
    selected.y -= pmouseY - mouseY;
  }
}

function mouseReleased() {
  selected = null;
}
