
let sw = 10, minSz = 100, splitConstraint = 0.1;
let colors = ['red', 'blue', 'yellow', 'black', 'white', 'white', 'white', 'white','white'];

function setup() {
  createCanvas(1100, 800);
  stroke(0);
  strokeWeight(sw);
  rrect(20, 20, width - 40, height - 40);
}

function rrect(x, y, w, h) {

  // pick a random pt inside the rect
  let pt = [
    random(x + w * splitConstraint, x + w * (1 - splitConstraint)),
    random(y + h * splitConstraint, y + h * (1 - splitConstraint))
  ];

  // split the rect on this point into 4 new rects
  if (w > minSz && h > minSz) {
    rrect(x, y, pt[0] - x, pt[1] - y);
    rrect(pt[0], y, x + w - pt[0], pt[1] - y);
    rrect(x, pt[1], pt[0] - x, y + h - pt[1]);
    rrect(pt[0], pt[1], x + w - pt[0], y + h - pt[1]);
  }
  else {
    // done, fill the rect with a random color
    stroke(0)
    fill(random(colors));
    rect(x, y, w, h);
    border(x, y, w, h);
  }
}

// draw shadowed lines for border
function border(x, y, w, h) {
  strokeWeight(sw*.85);
  strokeCap(ROUND);
  line(x, y, x + w, y);
  line(x + w, y, x + w, y + h);
  line(x + w, y + h, x, y + h);
  line(x, y + h, x, y);
  stroke(0, 32);
  strokeCap(SQUARE);
  line(x + sw * 1.5, y + sw, x + w, y + sw);
  line(x + sw, y + h, x + sw, y);
  strokeWeight(sw);
}


