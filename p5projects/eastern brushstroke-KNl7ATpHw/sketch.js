let brushSize = 10;
let f = false;
let spring = 0.4;
let friction = 0.45;
let v = 0.5;
let r = 0;
let vx = 0;
let vy = 0;
let splitNum = 100;
let diff = 4;
let trans = 10;

function setup() {
  createCanvas(1000, 1000);
  background(245);
}

function draw() {
  if (mouseIsPressed) {
    if (!f) {
      f = true;
      x = mouseX;
      y = mouseY;
    }
    vx += (mouseX - x) * spring;
    vy += (mouseY - y) * spring;
    vx *= friction;
    vy *= friction;

    v += sqrt(vx * vx + vy * vy) - v;
    v *= 0.6;

    oldR = r;
    r = brushSize - v;

    let tdiff = diff * 1;
    let sdiff = diff * 1.25;
     tdiff = diff * random(.8,1.2);
     sdiff = diff * random(1,1.5);
    for (let i = 0; i < splitNum; ++i) {
      oldX = x;
      oldY = y;
      x += vx / splitNum;
      y += vy / splitNum;
      oldR += (r - oldR) / splitNum;
      if (oldR < 1) {
        oldR = 1;
      }
      
      stroke(0,0,100,trans);
      strokeWeight(oldR + diff);
      line(x, y, oldX, oldY); // main line
      //continue;
      
      strokeWeight(oldR); // side lines
      stroke(0,0,100,trans/2);
      line(x - tdiff, y - tdiff, oldX - tdiff, oldY - tdiff);
      
      strokeWeight(max(1,oldR)); // side lines
      stroke(0,0,100,trans/3);
      line(x + sdiff, y + sdiff, oldX + sdiff, oldY + sdiff);
    }
  } else if (f) {
    vx = vy = 0;
    f = false;
  }
}
