let circles = [];
let maxFails = 3000;
let maxNum = 2;
let sz = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (sz <= 1) noLoop();

  doSearch();

  background(240);
  circles.forEach(([x, y, r]) => circle(x, y, r * 2));
}

function doSearch() {
  
  let adds = 0;
  let fails = 0;
  while (++fails < maxFails) {
    let nx = random(sz, width - sz);
    let ny = random(sz, height - sz);
    if (!collides(nx, ny, sz)) {
      circles.push([nx, ny, sz]);
      if (++adds >= maxNum) break;
    }
  }
  console.log(sz, adds + '/'+maxNum+' added', fails + ' fails', );
  
  maxNum *= 1.7;
  sz *= .75;
}

function collides(cx, cy, radius) {
  for (let j = 0; j < circles.length; j++) {
    [x, y, r] = circles[j];
    if (overlaps(x, y, r, cx, cy, radius)) {
      return true;
    }
  }
  return false;
}

function overlaps(x, y, r, x1, y1, r1) {
  return dist(x, y, x1, y1) < r1 + r;
}
