let sample, analyzer, sz = 1;

function preload() {
  sample = loadSound('beat.mp3');
}

function setup() {
  createCanvas(200, 200);
  fill(127);
  stroke(0);
  
  sample.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(sample);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  sz = lerp(sz, 10 + rms * 200, .2);
  
  // Draw an ellipse with size based on volume
  circle(width / 2, height / 2, sz);
}
