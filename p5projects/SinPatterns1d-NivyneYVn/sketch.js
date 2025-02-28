function setup() {
  createCanvas(600, 200);
  noFill();
  frameRate(30);
  angleMode(DEGREES);
  //createLoop({duration:3, gif:{render:false, download:true}});
}

function draw() {
  background(220);
  let num = 20;
  let csz = width / num;
  let wavelength = 1;
  for (let i = 0; i < num; i++) {
    let alpha = 360.0 * (i / num) + 180;
    let pos = alpha / wavelength + frameCount*4;
    let sz = map(cos(pos), -1, 1, 10, height/2);
    circle(i * csz + csz / 2, 100, sz);
  }
}
