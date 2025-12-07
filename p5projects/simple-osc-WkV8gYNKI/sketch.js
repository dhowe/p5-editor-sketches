let osc;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator();
  osc.start();
}

function draw() {
  background(220);
  osc.freq(map(mouseX, 0, width, 50, 1000));
  osc.amp(map(mouseY, 0, height, 0, 0.5), 1);
}