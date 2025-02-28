class LerpWalker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.targetX = random(width);
    this.targetY = random(height);
  }

  update() {
    // Move towards the target position
    this.x = lerp(this.x, this.targetX, 0.05);
    this.y = lerp(this.y, this.targetY, 0.05);

    // If the walker is close to the target, pick a new target
    if (dist(this.x, this.y, this.targetX, this.targetY) < 5) {
      this.targetX = random(width);
      this.targetY = random(height);
    }
  }
  
  draw() {
    ellipse(this.x, this.y, 10);
  }
}

let walker1, walker2;
 
function setup() {
  createCanvas(400, 400);
  stroke('red');
  fill('black');
  
  walker1 = new LerpWalker(100, 100);
  walker2 = new LerpWalker(300, 300);
}

function draw() {
  background(220);

  walker1.update();
  walker2.update();

  walker1.draw();
  walker2.draw();
  
  line(walker1.x, walker1.y, walker2.x, walker2.y);
}
