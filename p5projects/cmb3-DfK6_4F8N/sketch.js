let img;
let scrollOffset = 0;

function preload() {
  img = loadImage(`flower.png`);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let u = 0;  
  let n = [
    0.8145062499999999,
    0.5220062499999999,
    0.31640625,
    0.17850625000000003,
    0.09150625000000004,
    0.04100624999999998,
    0.015006249999999995,
    0.00390625,
    0.0005062499999999988,
    0.000006250000000000022
  ];
  let r = 104;
  for (let i = 0; i < 10; i++) {
    push();
    let u = i*height/10;
    translate(0, u);
    image(img, width-63, 0, 63, height/10);//, width - 2 * o, n[i] * r + 0.5);
    pop();
    //u += n[i] * height/10;
  }
}

function mouseWheel(event) {
  scrollOffset -= event.delta;
}
