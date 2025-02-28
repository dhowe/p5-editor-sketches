let walkers = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    if (i < 10)  {
      walkers.push(new Food());  
    }
    else {
      walkers.push(new Walker());
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].update();
    
    // check collisions
    for (let j = i; j < walkers.length; j++) {
      if (intersects(walkers[j], walkers[i])) {
        console.log('hit');
      }
    }
    
    walkers[i].render();
  }
}

function intersects(cA, cB) {

  let dx = cA.x - cB.x;
  let dy = cA.y - cB.y;
  let d2 = dx * dx + dy * dy;
  let d = sqrt(d2);

  if ((d > cA.r + cB.r) || (d < abs(cA.r - cB.r))) {
    return false; // no intersection 
  }

  let a = (cA.r2 - cB.r2 + d2) / (2 * d);
  let h = sqrt(cA.r2 - a * a);
  let x2 = cA.x + a * (cB.x - cA.x) / d;
  let y2 = cA.y + a * (cB.y - cA.y) / d;

  let paX = x2 + h * (cB.y - cA.y) / d;
  let paY = y2 - h * (cB.x - cA.x) / d;
  let pbX = x2 - h * (cB.y - cA.y) / d;
  let pbY = y2 + h * (cB.x - cA.x) / d;

  //return true;
  stroke(dist(paX, paY, pbX, pbY)*4, 12); 
  line(paX, paY, pbX, pbY);
}

class Walker {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(20, 40);
    this.vx = random(-0.25, 0.25);
    this.vy = random(-0.25, 0.25);
    this.r2 = this.r * this.r;
  }
  update() {
    this.x += this.vx + random() - 0.5;
    this.y += this.vy + random() - 0.5;
    
    // wraparound if we're off edge
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }
  render() {
    noFill();
    stroke(0);
    circle(this.x, this.y, this.r*2);
  }
}

class Food extends Walker {
  constructor() {
    super();
  }
  update() {}
  render() {
    noStroke();
    fill(200,0,0);
    circle(this.x, this.y, this.r*2);
  }
}

