let walkers = [];

function setup() {
  createCanvas(200, 600);
  background(30);
  strokeWeight(.1);
  for (let i = 0; i < 100; i++) {
    let w = new Walker(i*2,0,0,1);
    walkers.push(w);
  }
}

function draw() {
  stroke(255)
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].render();
  }
}
