let font, x = 10, y = 200, sz = 180, str = 'Logic';

function preload() {
  font = loadFont('Roboto-Regular.ttf');
}

function setup() {
  createCanvas(500, 300);
  background(255);
  textFont(font);
  textSize(sz);
  text(str, x, y);
  fill(200,0,0);
  noStroke();
  let r = font.textBounds(str, x, y, sz);
  console.log(r);
  let pts = font.textToPoints(str, x, y, sz, {
    sampleFactor: .1
  });
  for (let i = 0; i < pts.length; i++) {
	circle(pts[i].x, pts[i].y,3);		
  }
  noFill();
  stroke(200,0,0);
  rect(r.x,r.y,r.w,r.h);
}