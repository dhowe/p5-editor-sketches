let walkers = [];

function setup() {
  
  createCanvas(500, 400);
  
  for (let i = 0; i < 100; i++) {
    walkers.push(new Walker());
  }
}

function draw() {
  background(245);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].render();
  }
}
