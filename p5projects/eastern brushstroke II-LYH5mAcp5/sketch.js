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
let trans = ["09", "04", "04"];
let col = "#000000";
let sw, bx,
  by,
  tx,
  ty,
  drawing = 1,
  spd = 0.2;

function setup() {
  createCanvas(500, 500);
  background(245);
  bx = tx = width / 2;
  by = ty = height / 2;
  noFill();
}

function draw() {
  //circle(bx,by,5);
  let d = dist(bx, by, tx, ty);
  if (d < 5) {
    while (dist(bx, by, tx, ty) < 15) {
      let maxd = 50;
      brushSize = random(1, 18);
      let angle = random(0, TWO_PI);
      let len = random(20, 100);
      tx = constrain(bx + len * cos(angle), 50, width - 50);
      ty = constrain(by + len * sin(angle), 50, height - 50);
      drawing = random() < 0.7 ? true : false;
    }
  }
  let wiggle = random(d/10, d / 5);
  bx = lerp(bx, tx, spd) + random(-wiggle, wiggle);
  by = lerp(by, ty, spd) + random(-wiggle, wiggle);
  if (drawing) {
    if (!f) {
      f = true;
      x = bx;
      y = by;
    }
    vx += (bx - x) * spring;
    vy += (by - y) * spring;
    vx *= friction;
    vy *= friction;

    v += sqrt(vx * vx + vy * vy) - v;
    v *= 0.6;

    oldR = r;
    r = brushSize - v;

    let tdiff = diff * 1;
    let sdiff = diff * 1.25;
    tdiff = diff * random(0.8, 1.2);
    sdiff = diff * random(0.9, 1.3);
    for (let i = 0; i < splitNum; ++i) {
      oldX = x;
      oldY = y;
      x += vx / splitNum;
      y += vy / splitNum;
      oldR += (r - oldR) / splitNum;
      if (oldR < 1) {
        oldR = 1;
      }

      sw = oldR + diff;
      stroke(col + trans[0]);
      strokeWeight(sw);
      line(x, y, oldX, oldY); // main line
      //continue;

      sw = 5 * (1 / diff);
      if (sw > 0.5) {
        stroke(col + trans[1]);
        strokeWeight(sw); // side lines
        line(x - tdiff, y - tdiff, oldX - tdiff, oldY - tdiff);
      }
      if (random() < 0.5) {
        sw = max(1, oldR);
        if (sw > 2) {
          stroke(col + trans[2]);
          strokeWeight(sw); // side lines
          line(x + sdiff, y + sdiff, oldX + sdiff, oldY + sdiff);
        }
      }
    }
  } else if (f) {
    vx = vy = 0;
    f = false;
  }
}
