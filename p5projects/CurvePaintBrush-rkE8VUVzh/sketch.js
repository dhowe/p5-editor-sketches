let mx = [];
let my = [];

// NEXT: add gesture to save to offscreen canvas (bg)
function setup() {
  createCanvas(400, 400);
}

function rColor() {
  return color(random(155,255),random(15,255),255);
}

function draw() {
  background(200);
  let t = map(mouseX, 0, width, -5, 5);
  curveTightness(5);
  if (frameCount % 10 == 9) {
    if (mouseX != pmouseX && mouseY != pmouseY) {
      mx.push(mouseX);
      my.push(mouseY);
    } else if (!mouseIsPressed) {
      mx.pop();
      my.pop();
    }
  }


  if (mx.length > 2) { // at least 4 for a curve;

    mx = mx.slice(Math.max(mx.length - 150, 0));
    my = my.slice(Math.max(my.length - 150, 0));

    beginShape();
    curveVertex(mx[0], my[0]);
    for (let i = 0; i < mx.length; i++) {
      curveVertex(mx[i], my[i]);
    }
    curveVertex(mx[0], my[0]);
    curveVertex(mx[0], my[0]);
    //curveVertex(mx[mx.length - 1], my[my.length - 1]);

    endShape();
  }
}