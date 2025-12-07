function setup() {
  createCanvas(300, 200);
  stroke(255);
  noFill();
  
  mail(100, 75, 100, 50);
}

function mail(x, y, w, h) {
  rect(x, y, w, h);
  line(x, y, x + w / 2, y + h / 2);
  line(x, y, x + w / 2, y + h / 2);
  line(x + w, y, x + w / 2, y + h / 2);
}
