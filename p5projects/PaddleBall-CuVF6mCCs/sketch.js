let ballRadius = 5;
let x = 350, y = 200;
let spdX = -4.1, spdY = 5;
let ballLeft, ballRight, ballTop, ballBot;

let padW = 5, padX = 50, padH = 50;
let padLeft, padRight, padTop, padBot;

function setup() {
  createCanvas(400, 300);
  rectMode(CENTER);
}

function draw() {

  padY = constrain(mouseY, 0 + padH / 2, height - padH / 2);

  ballLeft = x - ballRadius;
  ballRight = x + ballRadius;
  ballTop = y - ballRadius;
  ballBot = y + ballRadius;
  
  padLeft = padX - padW / 2;
  padRight = padX + padW / 2;
  padTop = padY - padH / 2;
  padBot = padY + padH / 2;

  // hit right/left side wall
  if (ballRight >= width || ballLeft <= 0) {
    spdX = -spdX;
  }
  
  // hit top/bottom side wall
  if (ballBot >= height || ballTop <= 0) {
    spdY = -spdY;
  }
  
  if (ballBot >= padTop && ballTop <= padBot) { // vertical check

    // hit paddle on right side
    if (spdX < 0 && ballLeft <= padRight && ballRight >= padLeft) { 
      spdX = -spdX;
    }
    
    // hit paddle on left side
    else if (spdX > 0 && ballRight >= padLeft  && ballLeft <= padRight) { 
      spdX = -spdX;
    }
  }

  x += spdX;
  y += spdY;
  
  background(235);
  rect(padX, padY, padW, padH);
  circle(x, y, ballRadius * 2);
}