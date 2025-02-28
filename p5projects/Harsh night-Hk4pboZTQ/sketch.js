let font, x = 3, y = 70;
let bounds; // holds x, y, w, h of bounding box

function preload() {
  font = loadFont('acmesa.ttf');
}

function setup() {
  createCanvas(400, 100);

  // set up the font
  //textFont(font);
  //textSize(60);
  //textAlign(LEFT);
}

function draw() {
  background(204, 120);

  fill(0);
  text('textBounds', x, y);

  noFill();
  bounds = font.textBounds('textBounds', x, y);
  rect(bounds.x, bounds.y, bounds.w, bounds.h);
}