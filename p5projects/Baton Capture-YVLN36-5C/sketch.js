let capturer;

function setup() {
  capturer = new CCapture({ format: 'webm' });
  createCanvas(400, 400);
}

function draw() {

  if (frameCount == 1) capturer.start(); // start on first frame

  // Drawing code --------------------------
  background(235, 64);
  translate(width / 2, height / 2);
  rotate(frameCount / 50);
  
  let len = sin(frameCount/40) * width/3;s
  line(-len, -len, len, len);
  circle(-len, -len, 10);
  circle(len, len, 10);
  // ------------------------------------

  capturer.capture(drawingContext.canvas);  // capture each frame
}

function keyPressed() {

  // stop/save with space-bar
  if (key === ' ') {
    noLoop();
    capturer.stop();
    capturer.save();
 }
}
