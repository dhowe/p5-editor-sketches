let walkers = [];

function setup() {
  createCanvas(200, 600);
  background(30);
  for (let i = 0; i < 100; i++) {
    let w = new Walker(100, map(i,0,99,0,height), random(.1,10));
    walkers.push(w);
  }
}

function draw() {
  stroke(255,32)
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].render();
  }
}
