let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(30);
  for (let i = 0; i < 1; i++) {
    walkers.push(new Walker(200,200,200));
  }
}

function draw() {
  stroke(255,32)
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].render();
  }
}
