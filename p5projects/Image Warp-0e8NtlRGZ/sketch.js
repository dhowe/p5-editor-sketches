
let offset, img;

function preload() {
  img = loadImage('image.jpg');
}

function setup() {
  createCanvas(819*.2, 1024*.2);
  img.resize(width, height);
  offset = random(0, TWO_PI); 
}

function draw() {
  background(198, 194, 193);
  let size = 1;//
  offset += 0.1;
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      let d = dist(x, y, width / 2, height / 2);
      let angleOffset = map(d, 0, 512, -PI, PI);
      let newLocX = x + sin( offset + angleOffset) * 90;
      let newLocY = y + noise( offset + angleOffset) * 90;
      let c = img.get(newLocX,newLocY);
      fill(c);
      noStroke();
      rect(x, y, size, size);
    }
  }
}