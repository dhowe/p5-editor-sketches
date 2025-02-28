let walkers = [], step = 0.5;

function setup() {
  createCanvas(600, 600);
  background(0);
  for (let i = 0; i < 3000; i++) {
    walkers.push(new Walker(
      random(width),
      random(height),
      random(25, 80)));
  }
}


function draw() {
  background(0);

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].walk();
  }
  filter(ERODE);
  filter(ERODE);
}

class Walker {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.sz = s;
  }
  walk() {
    this.x += random(-step, step);
    this.y += random(-step, step);
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
    this.draw();
  }
  draw() {
    strokeWeight(map(noise(this.x+frameCount/110),0,1,3,.1));
    fill(0, 55 + noise(19 + frameCount / 205) * 100, 
         100+noise( frameCount / 125) * 150, 15);
    noStroke()
    circle(this.x, this.y, this.sz*.6);

    stroke(200, 0, noise(frameCount / 100) * 255, 
           noise(119 + frameCount / 20) * 100 + 50);
    circle(this.x, this.y, this.sz);
  }
}