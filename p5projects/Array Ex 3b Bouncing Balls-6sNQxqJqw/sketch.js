// The ball has x,y and x-speed, y-speed & size
// Note: the speed is how far in each direction
// it moves for each frame (each draw())
let ballX = [];
let ballY = [];
let speedX = [];
let speedY = [];

let ballSize = 30; // shared ball size

// we use flash for the red color
// when the ball hits the wall
let flash = 0;

function setup() {
  createCanvas(400, 400);

  // loop, setting all initial values
  for (let i = 0; i < 10; i++) {
    ballX[i] = random(width);
    ballY[i] = random(height);
    speedX[i] = random(-3, 3);
    speedY[i] = random(-3, 3);
  }
}

function draw() {
  // draw the background (potentially red)
  background(flash * 25, 0, 0);

  // do each thing to EACH ball using the arrays
  for (let i = 0; i < ballX.length; i++) {
    
    // add the speed to the position
    ballX[i] += speedX[i];
    ballY[i] += speedY[i];

    // check collisions with left/right walls
    if (ballX[i] >= width - ballSize / 2 || ballX[i] <= ballSize / 2) {
      speedX[i] *= -1;
      flash = 10;
    }

    // check collisions with top/bottom walls
    if (ballY[i] >= height - ballSize / 2 || ballY[i] <= ballSize / 2) {
      speedY[i] *= -1;
      flash = 10;
    }

    // draw the ball
    circle(ballX[i], ballY[i], ballSize);
  }

  // decrement the flash so the red fades
  // but max sure it doesn't go below 0
  flash = max(--flash, 0);
}
