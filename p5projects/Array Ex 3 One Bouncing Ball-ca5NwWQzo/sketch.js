// The ball has x,y and x-speed, y-speed & size
// Note: the speed is how far in each direction
// it moves for each frame (each draw())
let ballX;
let ballY;
let speedX;
let speedY;
let ballSize;

// we use flash for the red color
// when the ball hits the wall
let flash = 0;

function setup() {
  createCanvas(400, 400);
  
  // initial values
  ballX = random(width);
  ballY = random(height);
  speedX = random(2,3);
  speedY = random(2,3);
  ballSize = 30;
}

function draw() {
  
  // add the speed to the position
  ballX += speedX;
  ballY += speedY;
    
  // check collisions with left/right walls
  if (ballX >= width-ballSize/2 || ballX <= ballSize/2) {
    speedX = -speedX;
    flash = 25;
  }
  
  // check collisions with top/bottom walls
  if (ballY >= height-ballSize/2 || ballY <= ballSize/2) {
    speedY = -speedY;
    flash = 25;
  }
  
  // draw the background (potentially red)
  background(flash*10, 0, 0);  
  
  // draw the ball
  circle(ballX, ballY, ballSize);
  
  // decrement the flash so the red fades
  // but max sure it doesn't go below 0
  flash = max(--flash, 0);
}