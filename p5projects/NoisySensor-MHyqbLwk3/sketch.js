let smoothSpeed = 0, liveSpeed = .5;

function setup() {
  createCanvas(400, 400);
  noStroke();
  strokeWeight(3);
}

function draw() {
  background(230);
  
  liveSpeed += random(-.1, .1);
  liveSpeed = constrain(liveSpeed,0,1);
  smoothSpeed = lerp(smoothSpeed, liveSpeed, .05);
  
  stroke(200,0,0);
  line(0, smoothSpeed * height, width, smoothSpeed * height);
  
  noStroke();
  fill(0);
  ellipse(width/2,liveSpeed * height,30);
}
