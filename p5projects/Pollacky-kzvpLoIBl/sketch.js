let border = 75;

function setup() {
  createCanvas(900, 600);
  background(251, 246, 242);
  for (let j = 0; j < 25; j++) {
    let c = color(random(156), 
                  random(156), 
                  random(156));
    if (j % 10 < 7) c = 0;
    stroke(c);
    for (let i = 0; i < 10; i++) {
      strokeWeight(random(2, 4));
      layer(floor(random(5,7)));
      //layer();
      ellipse(random(border, width - border),
        random(border, height - border),
        random(2, 5), random(2, 5));
    }
  }
  filter(DILATE);
}

function layer(num) {
  num = num || 6;
  noFill();
  beginShape();
  for (let i = 0; i < num; i++) {
    curveVertex(
      random(border, width - border), 
      random(border, height - border));
  }
  endShape();
}