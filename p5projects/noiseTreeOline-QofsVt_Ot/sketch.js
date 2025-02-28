let seed, angle = 45;
let lenScale = .6;

function setup() {
  createCanvas(700, 600);
  seed = random(10000);
  noStroke();
}

function draw() {
  background(250);
  randomSeed(seed);
  translate(width / 2, height);
  branch(150);
}

function branch(len) {
  angle = random(20, 45);
  lenScale = random(.6, .8);
  if (len > 3) {
//    stroke(0, 180);

    oline(0, 0, 0, -len, map(len, 1, 110, .1, random(8, 12)));
    stroke(0);
    translate(0, -len);

    push();
    angle = map(noise(frameCount / 100), 0, 1, 30, 40);
    rotate(radians(angle));
    branch(len * lenScale);
    pop();

    push();
    angle = map(noise(20 + frameCount / 130), 0, 1, 30, 40);
    rotate(radians(-angle));
    branch(len * lenScale);
    pop();

  } else {
    noStroke();
    fill(random(200, 255), random(100), random(100), 200);
    ellipse(0, 0, random(len, 4*len), 5 * len);
  }

}

function oline(x1, y1, x2, y2, weight) {
  strokeCap(ROUND);
  strokeWeight(weight);
  var twi = 1 + (weight/24.0);
  var xd = x2 - x1, yd = y2 - y1;
  var dist = sqrt(xd * xd + yd * yd);
  var sects = ceil(dist / 10.0);
  var tw2 = new Array(sects + 1).fill(0.0);
  for (var i = 0; i < sects; i++) {
    var tw = random(-twi, twi);
    var tx1 = x1 + ((xd / sects) * (i)) + tw2[i];
    var tx2 = x1 + ((xd / sects) * (i + 1)) + tw;
    var ty1 = y1 + ((yd / sects) * (i));
    var ty2 = y1 + ((yd / sects) * (i + 1));
    if (i == sects - 1) {
      tx2 = x2;
      ty2 = y2;
    }
    line(tx1, ty1, tx2, ty2);
    tw2[i + 1] = tw;
  }
}