let pts, dragIndex;

function setup() {
  createCanvas(400, 400);
  pts = getPts(5);
}

function draw() {
  background(220);
  noFill();
  dragIndex = -1; // reset
  beginShape();
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i].x, pts[i].y);
    if (i == 0 || i == pts.length - 1) {
      if (dist(mouseX, mouseY, pts[i].x, pts[i].y) < 20) {
        dragIndex = i;
      }
      circle(pts[i].x, pts[i].y, 10);
    }
  }
  endShape();
}

// drag the control points
function mouseDragged() {
  if (false && dragIndex > -1) {
    pts[dragIndex].x -= pmouseX - mouseX;
    pts[dragIndex].y -= pmouseY - mouseY;
  }
}

function getPts(num) {
  let pts = [];
  for (let i = 0; i < num; i++) {
    let x = random(20, width - 20);
    let y = random(20, height - 20);
    pts.push({ x, y });
  }
  return pts;
}
