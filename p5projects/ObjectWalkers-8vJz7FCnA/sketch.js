let walkers = [];

function setup() {
  createCanvas(400, 400);
  background(255);
  for (let i = 0; i < 100; i++) {
    let w = new Walker(
      random(width), 
      random(height), 
      (i + 1)/5, 
      2.5 * i);
    walkers.push(w);
  }
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].render();
  }
}
