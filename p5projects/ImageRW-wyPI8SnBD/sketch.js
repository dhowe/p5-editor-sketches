let x = [],
  y = [],
  col = [],
  img, pix, step = 10;

function preload() {
  img = loadImage("carrie.jpg");
}

function setup() {
  createCanvas(512, 512);
  background(255);
  rectMode(CENTER);
  //noStroke();
  img.loadPixels();
  for (let j = 0; j < img.height; j++) {
    for (let i = 0; i < img.width; i++) {
      let idx = (j * width + i);
      x.push(i * 4);
      y.push(j * 4);
      col.push(img.get(i, j)[0]);
      //stroke(img.get(i,j),64);
      //noFill();
      //ellipse(i*4,j*4, map(img.get(i,j)[0],0,255,4,1));
    }
  }
}

function draw() {
  background(255);

  for (let i = 0; i < x.length; i++) {
    x[i] += random(-2, 2);
    y[i] += random(-2, 2);
    fill(col[i]);
    noStroke();
    ellipse(x[i], y[i], 6);
  }

}