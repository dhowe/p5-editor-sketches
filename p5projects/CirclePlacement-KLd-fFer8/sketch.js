let x = [], y = [], sz = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {

  addCircle(); // find open spot
  
  // draw all the circles 
  background(255);
  for (let i = 0; i < x.length; i++) {
    circle(x[i], y[i], sz[i]);
  }

  if (x.length > 50) noLoop();
}

function addCircle() {

  let tsz = random(20, 100);
  let tx = random(tsz, width - tsz);
  let ty = random(tsz, height - tsz);
  
  WHILE: while (true) {
    let collision = false;
    for (let i = 0; i < x.length; i++) {
      let r = sz[i] / 2 + tsz / 2;
      if (dist(x[i], y[i], tx, ty) <= r) {
        collision = true;
        break;
      }
    }
    if (!collision) break;
    tsz = random(20, 100);
    tx = random(tsz, width - tsz);
    ty = random(tsz, height - tsz);
  }
  
  x.push(tx);
  y.push(ty);
  sz.push(tsz);
}