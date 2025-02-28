let num = 1,
  seed, x = 0, y = 0, sz = 400;

function setup() {
  createCanvas(500, 500);
  background(240);

  //rectMode(CENTER);
  //frameRate(1);
  noFill();
  //isquare(x,y,sz);
  seed = Date.now();
}

function mouseClicked() {
  // randomSeed(seed);
  //isquare(0, 0, 400, ++num);
  sz = sz/2;
  isquare(x, y, sz);
  isquare(x+sz, y, sz);
  isquare(x, y+sz, sz);
  isquare(x+sz, sz, y+sz, sz);
}
//   sz /= 2;
//   let roll = floor(random(4));
//   if (roll == 1) x += sz;
//   if (roll == 2) y += sz;
//   if (roll == 3) {
//     x += sz;
//     y += sz;
//   }
//   isquare(x, y, sz, num);
// }

// function draxw() {
//   background(220);
// }

function isquare(x, y, sz) {
  square(x, y, sz);
  square(x, y, sz/2);
  square(x+sz/2, y+sz/2, sz/2);
  //line(x, y + sz / 2, x + sz, y + sz / 2);
  // line(x + sz / 2, y, x + sz / 2, y + sz);
}

function isquare1(x, y, sz, num = 1) {
  print('isquare', num);
  for (let i = 0; i < num; i++) {
    square(x, y, sz);
    if (i > 0) square(x + sz, y + sz, sz);
    sz = sz / 2;
  }
}

function isquare2(x, y, sz, num = 1) {
  square(x, y, sz);
  for (let i = 0; i < num - 1; i++) {
    stroke("black");
    line(x, y + sz / 2, x + sz, y + sz / 2);
    line(x + sz / 2, y, x + sz / 2, y + sz);
    sz *= .5;
    let roll = floor(random(4));
    if (roll == 1) x += sz;
    if (roll == 2) y += sz;
    if (roll == 3) {
      x += sz;
      y += sz;
    }
  }
}
