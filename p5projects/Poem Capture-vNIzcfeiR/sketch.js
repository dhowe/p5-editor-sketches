let capturer, lines, ts = 0, idx = 0;
capturer = new CCapture({ format: 'webm', fps: 24 });

function preload() {
  lines = loadStrings('poem.txt');
}

function setup() {
  createCanvas(1000, 600);
  textAlign(CENTER, CENTER);
  textFont("Georgia", windowWidth/20);
  fill(255);
}

function draw() {

  if (frameCount == 1) capturer.start(); // start on first frame
  
  background(0);
  if (millis() - ts > 1000) {
    ts = millis();
    ++idx;
    if (idx === lines.length) {
      noLoop();
      capturer.stop();
      capturer.save();
    } 
  }
  text(lines[idx], width/2, height/2);
  
  capturer.capture(drawingContext.canvas);  // capture each frame
}
