let x = 200;
let y = 200;
let step = 10;
let xs = [x];
let ys = [y];
let nk=0;
let nj=0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function keyPressed() {
  loop();
}

function drawx() {
  rect(0,0,width/2,height/2);
  console.log(screenPercent());
  noLoop(); 

}
function draw() {
  let x1,
    y1,
    tries = 0;
  while (!x1 || intersectsAny(x, y, x1, y1)) {
    //x1 = x + random(-step, step);
    //y1 = y + random(-step, step);
    x1 = x + map(noise(nk+=.05),0,1,-step,step);
    y1 = y + map(noise(nj+=.06),0,1,-step,step);
    step = map(tries, 0, 50, 20, 1);

    if (++tries > 50) {
      x = random(1, width - 1);
      y = random(1, height - 1);
      let sp = screenPercent();
      if (sp >= 20) {
        noLoop();
        console.log('done');
      }
      console.log(sp);
      
      return;
    }
    
    //step = map(tries, 0, 100, 10, 1);
    //stroke(0,map(tries, 0, 100, 200, 50);
  }
  fill(0);
  line(x, y, x1, y1);
  xs.push(x1);
  ys.push(y1);
  x = x1;
  y = y1;
}

function screenPercent() {
  let count = 0,
    total = 0;
  loadPixels();
  const d = pixelDensity();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const i = 4 * d * (y * d * width + x);
      const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];
      total++;
      if (r === 0) count++;
    }
  }
  return count / total * 100;
}

function intersectsAny(x1, y1, x2, y2) {
  if (x1 < 0 || x1 > width) return true;
  if (y1 < 0 || y1 > height) return true;
  if (x2 < 0 || x2 > width) return true;
  if (y2 < 0 || y2 > height) return true;
  for (let i = 1; i < xs.length; i++) {
    let a1 = xs[i - 1];
    let a2 = xs[i];
    let b1 = ys[i - 1];
    let b2 = ys[i];
    if (intersects(x1, y1, x2, y2, a1, b1, a2, b2)) {
      return true;
    }
  }
  return false;
}

function intersects(x1, y1, x2, y2, a1, b1, a2, b2) {
  let { A: A1, B: B1, C: C1 } = toLineEq(x1, y1, x2, y2);
  let { A: A2, B: B2, C: C2 } = toLineEq(a1, b1, a2, b2);
  let det = A1 * B2 - A2 * B1;
  if (det != 0) {
    let x = (B2 * C1 - B1 * C2) / det;
    let y = (A1 * C2 - A2 * C1) / det;
    if (
      x < min(x1, x2) ||
      x > max(x1, x2) ||
      x < min(a1, a2) ||
      x > max(a1, a2) ||
      y < min(y1, y2) ||
      y > max(y1, y2) ||
      y < min(b1, b2) ||
      y > max(b1, b2)
    )
      return;
    return { x, y };
  }
}

function toLineEq(x1, y1, x2, y2) {
  let A = y2 - y1;
  let B = x1 - x2;
  let C = A * x1 + B * y1;
  return { A, B, C };
}
