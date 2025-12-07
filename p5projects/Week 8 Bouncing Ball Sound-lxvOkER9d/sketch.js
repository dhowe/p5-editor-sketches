let sound, balls = [];

function preload() {
  // TODO: load sound
}

function setup() {
  createCanvas(400, 400);
  
  let ball = new BouncingBall();
  balls.push(ball);
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
   
    // TODO: play sound when walker has collision
    let collided = ball.checkBoundaries();
        
    ball.update();
    ball.display();
  }
}

class BouncingBall {
  
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocityX = random(3, 6);
    this.velocityY = random(3, 6);
    this.size = 20;
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  display() {
    circle(this.x, this.y, this.size);
  }

  checkBoundaries() {
    let hadCollision = false;

    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.velocityX *= -1;
      hadCollision = true;
    }

    if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
      this.velocityY *= -1;
      hadCollision = true;
    }

    return hadCollision;
  }
}