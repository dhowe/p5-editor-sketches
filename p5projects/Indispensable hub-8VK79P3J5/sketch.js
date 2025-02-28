let x,
  y,
  w = 300,
  showBB = 0,
  s,
  suf = "is text that wraps when it gets too long.";
let p = window;

function setup() {
  p.createCanvas(1100, 350);
  background(255);
  p.textSize(20);
  p.textLeading(22);

  ///////////////////////////// BASELINE (L,C,R) ///////////////////////////////
  y = 20;

  //1
  (x = 20), (s = "LEFT BASELINE " + suf);
  p.fill(0) &&
    p.noStroke() &&
    p.textAlign(p.LEFT, p.BASELINE) &&
    p.text(s, x, y, w);
  p.noFill() && p.stroke(0) && p.strokeWeight(1) && p.rect(x, y, w, 1000);
  p.noFill() && p.stroke(0) && p.strokeWeight(0.1) && p.line(0, y, p.width, y); //&& p.line(x, 0, x, p.height);
}
