let liveSpeed = 0.5;

function setup() {
  createCanvas(400, 400);
  noStroke();
  strokeWeight(3);
}

function draw() {
  background(230);

  liveSpeed += random(-0.1, 0.1);
  liveSpeed = constrain(liveSpeed, 0, 1);
  
  noStroke();
  fill(0);
  ellipse(width / 2, liveSpeed * height, 30);

  // smoothSpeed = lerp(smoothSpeed, liveSpeed, .05);
  // stroke(200,0,0);
  // line(0, smoothSpeed * height, width, smoothSpeed * height);
}
