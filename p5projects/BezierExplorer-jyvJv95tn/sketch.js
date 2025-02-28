let p0, p1, p2, p3;
let A, B, C;

function setup() {
  createCanvas(400, 400);
  noFill();
  p0 = createVector(width * 0.2, height - 100);
  p1 = createVector(width * 0.3, 100);
  p2 = createVector(width * 0.7, 100);
  p3 = createVector(width * 0.8, height - 100);
}

function draw() {
  background(220);
  
  let t = map(sin(frameCount / 50), -1, 1, 0, 1);
  
  A = p5.Vector.lerp(p0, p1, t);
  B = p5.Vector.lerp(p1, p2, t);
  C = p5.Vector.lerp(p2, p3, t);
  D = p5.Vector.lerp(A, B, t);
  E = p5.Vector.lerp(B, C, t);
  F = p5.Vector.lerp(D, E, t);

  [p0,p1,p2,p3,F].forEach((p) => ellipse(p.x, p.y, 10));
  bezier(p0.x,p0.y,p1.x,p1.y,p2.x,p2.y,p3.x,p3.y);
}

let selected;
function mousePressed() {
  selected = [p0,p1,p2,p3].find(p => dist(p.x,p.y,mouseX,mouseY) < 5);
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
