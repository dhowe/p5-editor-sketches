let img, sz = 10, particles = [], dispH = 500;

function preload() {
  img = loadImage("daniel.png");
}

function setup() {
  createCanvas(500, 550);
  pixelDensity(1);
  noStroke();

  let pixels = getPixels(img);
  for (let i = 0; i < pixels.length; i++) {
    let x = i % img.width;
    let y = floor(i / img.width);
    let p = {
      x: x * sz + sz/2,
      y: y * sz + sz/2,
      col: pixels[i],
      xspd: random(-3, 3),
      yspd: random(-15),
      gravity: 0.98,
      alive: false,
    };
    particles.push(p);
  }
}

function draw() {
  background(245);
  noStroke();
  let stuck = particles.filter((p) => !p.alive);
  for (let i = 0; i < stuck.length; i++) {
    let p = stuck[i];
    fill(p.col);
    ellipse(p.x, p.y, 10);
  }
  stroke(0);
  let alive = particles.filter((p) => p.alive);
  for (let i = 0; i < alive.length; i++) {
    let p = alive[i];
    p.yspd += p.gravity;
    p.x += p.xspd;
    p.y += p.yspd;
    if (p.y >= height - 5) {
      p.y = height - 5;
      p.yspd *= -1;
      p.xspd *= 0.95;
      p.gravity *= 2.5;
    }
    fill(p.col);
    ellipse(p.x, p.y, 10);
  }
}

function mouseDragged() {
  let r = sz;
  // detach(mouseX,mouseY);
  detach(mouseX+r,mouseY);
  detach(mouseX,mouseY+r);
  detach(mouseX-r,mouseY);
  detach(mouseX,mouseY-r);
}
  
function detach(mx, my) {
  let x = floor(map(mx, 0, width, 0, img.width-1, true));
  let y = floor(map(my, 0, dispH, 0, img.height-1, true));
  let idx = y * img.width + x;
  print(idx)
  particles[idx].alive = true;
}

function getPixels(image) {
  let pix = [];
  image.loadPixels();
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let idx = (image.width * y + x) * 4;
      let r = image.pixels[idx];
      let g = image.pixels[idx + 1];
      let b = image.pixels[idx + 2];
      let a = image.pixels[idx + 3];
      pix.push(color(r, g, b, a));
    }
  }
  return pix;
}
