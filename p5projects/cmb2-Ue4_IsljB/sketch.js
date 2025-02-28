let img;
let scrollOffset = 0;

let e, r;
let n = 1,
  i = 1,
  o = () => {},
  s = 0,
  a = { r: 189, g: 162, b: 246 },
  l = 0;

function preload() {
  img = loadImage(`flower.png`);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  l += (s - l) * 0.1;
  let o = window.innerWidth > 1024 ? 8 : 6;
  if (
    ((n += (1 + Math.round(0 * Math.abs(0)) - n) * 0.1),
    (i += (1 + 0 * Math.abs(0) - i) * 0.1),
    e)
  ) {
    let r = 1, n = [], i = 0;
    clear();
    let s = height / 10;
    for (let e = 0; e < 10; e++) {
      let r = (e + 0.5) * s;
      let o = Math.pow(1 - Math.abs(l * height - r) / height, 4);
      n.push(o);
      i += o;
    }
    0 === i && (i = .001),  r = (t.height - 2 * o) / i;
    let u = 0;
    for (let i = 0; i < 10; i++) {
      push();
      translate(0, u);
      tint(a.r, a.g, a.b);
      image(e, 0, 0, width - 2 * o, n[i] * r + 0.5);
      pop();
      u += n[i] * r;
    }
  }
}

function mouseWheel(event) {
  scrollOffset -= event.delta;
}
