let x = 200, y = 200, maxStep = 5;

function setup() {

  createCanvas(400, 400);
  noStroke();
}

function draw() {

  background(255,64);
  
  fill(50);
  ellipse(x, y, 30, 30);

  
  x = (sin(frameCount/200+1000)+1) * width/2;
  y = (sin(frameCount/300)+1) * height/2;
  
  //x = noise(frameCount/200) * width;
  //y = noise(frameCount/300) * height;
}
