// REAS' PROCESS 3

let numCircle = 100;
let circles = [];

function setup() {
  createCanvas(800, 600);
  frameRate(30);
  for (let i = 0; i < numCircle; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 80);
    let xspeed = random(-0.25, 0.25);
    let yspeed = random(-0.25, 0.25);
    circles[i] = new Circle(x, y, r, xspeed, yspeed, i);
  }
  background(0);
}

function draw() {
  //background(0,8);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].move();
    circles[i].render();
  }
}

function Circle(px, py, pr, psp, pysp, pid) {
  this.x = px;
  this.y = py;
  this.r = pr;
  this.id = pid;
  this.sp = psp;
  this.ysp = pysp;
  this.diam = pr * 2;

  this.render = function () {
    noFill();
    stroke(255,32);
    //circle(this.x,this.y,this.diam)
  };

  this.update = function () {
    for (let i = this.id + 1; i < numCircle; i++) {
      let pts = intersect(circles[this.id], circles[i]);
      if (pts) {
        stroke(255,8);
        line(pts.x1, pts.y1, pts.x2, pts.y2);
      }
    }
  };

  this.move = function () {
    this.x += this.sp;
    this.y += this.ysp;
    if (this.sp > 0) {
      if (this.x > width + this.r) {
        this.x = -this.r;
      }
    } else {
      if (this.x < -this.r) {
        this.x = width + this.r;
      }
    }
    if (this.ysp > 0) {
      if (this.y > height + this.r) {
        this.y = -this.r;
      }
    } else {
      if (this.y < -this.r) {
        this.y = height + this.r;
      }
    }
  };
}

function intersect(c1, c2) {
  let dx = c2.x - c1.x;
  let dy = c2.y - c1.y;
  const d = Math.sqrt(dx * dx + dy * dy);

  // Circles too far apart
  if (d > c1.r + c2.r) {
    return;
  }

  // One circle completely inside the other
  if (d < Math.abs(c1.r - c2.r)) {
    return;
  }

  dx /= d;
  dy /= d;

  const a = (c1.r * c1.r - c2.r * c2.r + d * d) / (2 * d);
  const px = c1.x + a * dx;
  const py = c1.y + a * dy;
  const h = Math.sqrt(c1.r * c1.r - a * a);

  return {
    x1: px + h * dy,
    y1: py - h * dx,
    x2: px - h * dy,
    y2: py + h * dx,
  };
}