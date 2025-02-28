// REAS' PROCESS 3

var numCircle = 100;
var circles = [];

function setup() {
  createCanvas(800, 600);
  frameRate(30);
  for (var i = 0; i < numCircle; i++) {
    var x = random(width);
    var y = random(height);
    var r = random(20, 40);
    var xspeed = random(-0.25, 0.25);
    var yspeed = random(-0.25, 0.25);
    circles[i] = new Circle(x, y, r, xspeed, yspeed, i);
  }
  background(255);
}

function draw() {
  //background(255);
      
  for (var i = 0; i < circles.length; i++) {
    noFill();
    stroke(100);
    //circle(circles[i].x,circles[i].y,circles[i].r*2);
    circles[i].update();
  }
  for (var j = 0; j < circles.length; j++) {
    circles[j].move();
  }
}

function Circle(px, py, pr, psp, pysp, pid) {
  this.x = px;
  this.y = py;
  this.r = pr;
  this.id = pid;
  this.sp = psp;
  this.ysp = pysp;
  this.diam = pr * pr;

  this.update = function() {
    for (var i = this.id + 1; i < numCircle; i++) {
      intersect(circles[this.id], circles[i]);
    }
  }

  this.move = function() {
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
  }
}

function intersect(cA, cB) {

  var dx = cA.x - cB.x;
  var dy = cA.y - cB.y;
  var d2 = dx * dx + dy * dy;
  var d = sqrt(d2);

  if ((d > cA.r + cB.r) || (d < abs(cA.r - cB.r))) {
    return; // no solution 
  }

  var a = (cA.diam - cB.diam + d2) / (2 * d);
  var h = sqrt(cA.diam - a * a);
  var x2 = cA.x + a * (cB.x - cA.x) / d;
  var y2 = cA.y + a * (cB.y - cA.y) / d;

  var paX = x2 + h * (cB.y - cA.y) / d;
  var paY = y2 - h * (cB.x - cA.x) / d;
  var pbX = x2 - h * (cB.y - cA.y) / d;
  var pbY = y2 + h * (cB.x - cA.x) / d;

  stroke(dist(paX, paY, pbX, pbY)*4, 12); 
  line(paX, paY, pbX, pbY);

}