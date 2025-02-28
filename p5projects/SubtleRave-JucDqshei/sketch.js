let x = 300, y = 100, xspd = -3.1, yspd = 2,
  ballRad = 10, padH = 50, padW = 6, padX = 80;

function setup() {
  createCanvas(500, 300);
  rectMode(CENTER);
}

function draw() {
  
  let movingLeft = xspd < 0;
  
  let leftBall = x - ballRad;
  let rightBall = x + ballRad;
  let topBall = y - ballRad;
  let botBall = y + ballRad;
  
  let leftPad = padX - padW / 2;
  let rightPad = padX + padW / 2;
  let topPad = mouseY - padH / 2;
  let botPad = mouseY +  padH / 2;

  
  // is ballY within the paddleY
  if (botBall > topPad && topBall < botPad) {
    
    // bouncing against R side of paddle
    if (movingLeft && leftBall < rightPad && rightBall > leftPad) {
      xspd = -xspd;
    }
    
    // bouncing against L side of paddle
    else if (!movingLeft && rightBall > leftPad && leftBall < rightPad) {
      xspd = -xspd;
    }
  }
  
  // bouncing against walls
  if (leftBall <= 0 || rightBall >= width) {
    xspd = -xspd;
  }
  if (topBall <= 0 || botBall >= height) {
    yspd = -yspd;
  }
  
  x += xspd;
  y += yspd;
    
  background(220);
  circle(x,y,ballRad * 2);
  rect(padX, mouseY, padW, padH);
}