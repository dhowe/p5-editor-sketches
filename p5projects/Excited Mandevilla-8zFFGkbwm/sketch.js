let i, seed;

function preload() {
  i = loadImage(
    "https://us.v-cdn.net/5021068/uploads/editor/9v/5r6kt5y5fm3b.jpg"
  );
}

function setup() {
  createCanvas(800, 400);
  i.resize(800, 400);
  i.loadPixels();
  //noLoop();
  seed = random(99999);
}

function draw() {
  background(0);
  randomSeed(seed);

  let c = width / 2;
  let m = 10;

  for (let x = 0; x < i.width; x++) {
    let d = abs(x - c);
    let t = map(d, 0, c, 1, 0);
    let b = lerp(1, m, t);
    let a = lerp(255, 255, t);

    for (let y = 0; y < i.height; y += b) {
      let idx = (floor(x) + floor(y) * i.width) * 4;
      let r = i.pixels[idx];
      let g = i.pixels[idx + 1];
      let b = i.pixels[idx + 2];

      if (abs(x - c) < i.width / 6 && random(1) > 0.7) {
        continue;
      }

      let l = map(abs(x - c), 0, i.width / 2, 0, 255);
      let n = noise((x+frameCount) * 0.1, (y+frameCount) * 0.1) * 50;

      let gr = lerp(r, 180, t * 0.2);
      let gg = lerp(g, 60, t * 0.2);
      let gb = lerp(b, 180, t * 0.2);

      if (abs(x - c) < i.width / 6) {
        gr = lerp(r, 180, t * 0.3);
        gg = lerp(g, 60, t * 0.3);
        gb = lerp(b, 180, t * 0.3);
      }

      if (abs(x - c) > i.width / 4) {
        gr += n;
        gg += n;
        gb += n;
      }

      fill(gr, gg, gb, a - l);
      noStroke();
      rect(x, y, b, b);
    }
  }
  filter(ERODE); 
  filter(ERODE);
  filter(BLUR, mouseX > 0 ? map(mouseX,0,width,1,6) : 1.8);
}
