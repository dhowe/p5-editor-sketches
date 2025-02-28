
let ballX, ballY;
let speedX,speedY;

let ballSize = 30;
let ballCol = 255;

function setup() {
  createCanvas(400, 400);
  
  // initial values
  ballX = random(width);
  ballY = random(height);
  speedX = random(2,3);
  speedY = random(2,3);
}

function draw() {
  
  // add the speed to the position
  ballX += speedX;
  ballY += speedY;
    
  // collisions with left/right walls
  if (ballX >= width-ballSize/2 || ballX <= ballSize/2) {
    speedX = -speedX;
  }
  
  // collisions with top/bottom walls
  if (ballY >= height-ballSize/2 || ballY <= ballSize/2) {
    speedY = -speedY;
  }
  
  background(0);  
  fill(ballCol);
  circle(ballX, ballY, ballSize);
}