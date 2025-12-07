let mysound, amplitude;

function preload() {
  mysound = loadSound('snare.wav');
}

function setup() {
  createCanvas(380, 240);
  noStroke();

  amp = new p5.Amplitude();
  mysound.connect(amp); // connect both
}

function mousePressed() {
  mysound.play();
  mysound.rate(random(0.2, 2));
}

function draw() {
  background(255, 20);

  let vol = amp.getLevel();
  let ballsize = map(vol, 0, 0.5, 0, 200);

  fill(255, 0, 255);
  ellipse(width / 2, height / 2, ballsize, ballsize);
}
