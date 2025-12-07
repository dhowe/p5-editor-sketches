let osc;

function setup() {
  createCanvas(400, 400);

  osc = new p5.Oscillator("sine");
  osc.freq(440);
  osc.amp(0.0);

}

function draw() {
  background(220, 20, 120);

  let wFreq = map(mouseX, 0, width, 50, 1000);
  osc.freq(wFreq, 0.1);
  
  let wAmp = map(mouseY, 0, height, 0, 1);
  osc.amp(wAmp, 0.1);
}

function mouseClicked() {
  osc.start();
}

function keyReleased() {
  if (key == " ") {
    let oType = random(["sine", "triangle", "sawtooth", "square"]);
    osc.setType(oType);
    console.log(oType);
  }
}
