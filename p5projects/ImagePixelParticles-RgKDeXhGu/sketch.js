let img,
  radius = 4,
  xpos = [],
  ypos = [],
  xspd = [],
  yspd = [],
  col = [],
  gravity = [];

function preload() {
  img = loadImage("obama.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(5);
  pixelDensity(1);
  background(220);
  rectMode(CENTER);
  noStroke();
  noLoop();

  let pix = getPixels(img);
  print(pix.length);
  for (let y = 0; y < height; y += 8) {
    for (let x = 0; x < width; x += 8) {
      let idx = width * y + x;
      xpos.push(x);
      ypos.push(y);
      xspd.push(random(-1, 1));
      yspd.push(0);
      col.push(pix[idx]);
      gravity.push(0.5);
    }
  }
}

function mouseClicked() {
  loop();
}

function draw() {
  background(220);

  text(frameRate(), 20, 20);

  for (let i = 0; i < xpos.length; i++) {
    fill(col[i]);
    if (frameCount == 1 || col[i] < 100) {
      circle(xpos[i], ypos[i], radius * 2);
    }

    // add gravity
    yspd[i] += gravity[i];

    // update position
    xpos[i] += xspd[i];
    ypos[i] += yspd[i];

    // collision with bottom
    if (yspd[i] > 0 && ypos[i] >= height - radius) {
      ypos[i] = height - radius;
      yspd[i] *= -1;
      gravity[i] *= 1.5;
    }
  }
}

function getPixels(image) {
  let pix = [];
  image.loadPixels();
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      let i = (image.width * y + x) * 4;
      pix.push(image.pixels[i]);
    }
  }
  return pix;
}
