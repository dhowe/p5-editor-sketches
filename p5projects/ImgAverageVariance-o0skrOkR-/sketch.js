let img, depth = 0;

function preload() {
  img = loadImage("dhimage.jpg");
}

function setup() {
  createCanvas(1080, 540);
  textAlign(CENTER, CENTER);
  background(225);
  img.resize(540, 540);
}

function draw() {
  image(img, width / 2, 0);
  quadify(img, depth);
  textSize(16);
  text('depth=' + depth, width - 50, 20);
  noLoop();
}

function mouseClicked() {
  depth = (depth + 1) % 7;
  loop();
}

function quadify(img, depth = 3, coords = [0, 0, img.width, img.height]) {
  if (depth <= 0) {
    drawQuadrant(img, coords);
  }
  else {
    let [x, y, w, h] = coords;
    // divide the image into 4 quadrants
    let nw = [x, y, w / 2, h / 2];
    let ne = [x + w / 2, y, w / 2, h / 2];
    let sw = [x, y + h / 2, w / 2, h / 2];
    let se = [x + w / 2, y + h / 2, w / 2, h / 2];

    // recursively call quadify on each quadrant
    quadify(img, depth - 1, nw);
    quadify(img, depth - 1, ne);
    quadify(img, depth - 1, sw);
    quadify(img, depth - 1, se);
  }
}

function drawQuadrant(img, coords) {
  let {average, variance } = colorData(img, ...coords);
  console.log(average)
  fill(average) && stroke(0) && rect(...coords);
  let tx = coords[0] + coords[2] / 2;
  let ty = coords[1] + coords[3] / 2;
  noStroke() && fill(0) && textSize(coords[2] / 5);
  if (depth <= 4) {
    text(rgbToHex(average), tx, ty);
    text('v=' + variance.toFixed(2), tx, ty+ coords[2] / 5);
  }
}
