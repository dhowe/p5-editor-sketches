function rings(x,y,sz) {
  stroke(0);
  fill(255);
  square(x-sz/2,y-sz/2,sz);
  let c = 240;
  for (let j = 0; j < 20; j++) {
    fill(c);
    noStroke();
    circle(x, y, sz);
    c =  lerp(c,  0, 0.2);
    sz = lerp(sz, 5, 0.4);
  }
}

function setup() {
  createCanvas(400, 400);
  background(255);
  let k = 300;
  for (let j = 0; j < 10; j++) {
    rings(k, k, k);
    k *= .5;
  } 
}
