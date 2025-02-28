function setup() {

  createCanvas(445, 500);
  blendMode(MULTIPLY);
  background(221,215,215);
  
  let w = width / 12;
  let h = height / 12;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let x = (j+1.5)*w + random(-10, 10);
      let y = (i+1.5)*h + random(-10, 10);
      noisyRect(x, y, w*1.1, h*1.1);
    }
  }
}

function noisyRect(x, y, w, h) {
  let xoff = x - w / 2;
  let yoff = y - h / 2;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let r = random(70, 120);
      stroke(r, r * .7, r * .9, 200);
      point(xoff + j, yoff + i);
    }
  }
}