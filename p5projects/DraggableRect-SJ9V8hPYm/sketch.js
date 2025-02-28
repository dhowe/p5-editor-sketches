var x, y, x2, y2;
var moving = false;

function setup() {
  createCanvas(400, 400);
  noFill();
}

function draw() {
  background(220);
  rect(x, y, x2 - x, y2 - y);
}

// event-handlers --------------------------

function mouseDragged() {
  if (!moving) {
    x2 = mouseX;
    y2 = mouseY;
  } else {
    x = x + mouseX - pmouseX;
    y = y + mouseY - pmouseY;
    x2 = x2 + mouseX - pmouseX;
    y2 = y2 + mouseY - pmouseY;
  }
}

function mousePressed() {
  if (mouseX > x && mouseX < x2) {
    if (mouseY > y && mouseY < y2) {
      moving = true;
    }
  }

  if (!moving) {
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased() {
  moving = false;
}