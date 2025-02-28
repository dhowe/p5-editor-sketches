var angle = 30;
var seed = 0;
var nk = 0;

function setup() {
  createCanvas(600, 400);
  seed = random(999999);
}

function draw() {
  randomSeed(seed);
  background(150,190,240);
  noStroke();
  fill(50,150,50);
  rect(0,height*.75,width,height);
  
  push();
  translate(width / 2, height);
  branch(120);
  nk += 0.01;
  
  pop();
  noStroke();
  fill(50,150,50);
  rect(0,height*.85,width,height);
}

function branch(len) {

  stroke(0, 200);
  oline(0, 0, 0, -len, len / 10);
  translate(0, -len);

  if (len > 4) {

    if (random() < .95) {
      push();
      rotate(radians(map(noise(nk), 0, 1, 20, 40)));
      branch(len * random(.6, .77));
      pop();
    }

    if (random() < .3) {
      push();
      rotate(radians(map(noise(nk+300), 0, 1, -10, 10)));
      branch(len * random(.6, .77));
      pop();
    }

    if (random() < .95) {
      push();
      rotate(radians(-map(noise(nk+100), 0, 1, 20, 40)));
      branch(len * random(.6, .77));
      pop();
    }

  } else {

    noStroke();
    fill(random(140, 240), 50, 50, 100);
    ellipse(0, 0, random(2, 5), random(10, 20));
  }
}

function mouseClicked() {
  seed = random(999999);
}

function oline(x1, y1, x2, y2, weight)
{
  strokeCap(ROUND);
  strokeWeight(weight);

  var twisti = 1 + (weight/24.0);
  var xd = x2 - x1, yd = y2 - y1;
  var dist = sqrt(xd * xd + yd * yd);
  var sections = ceil(dist / 10.0);

  var twist, twist2 = new Array(sections + 1);
  for (var i = 0; i < twist2.length; i++) {
     twist2[i] = 0.0;
  }

  for (var i = 0; i < sections; i++)
  {
    twist = random(-twisti, twisti);
    var tx1 = x1 + ((xd / sections) * (i)) + twist2[i];
    var tx2 = x1 + ((xd / sections) * (i + 1)) + twist;
    var ty1 = y1 + ((yd / sections) * (i));
    var ty2 = y1 + ((yd / sections) * (i + 1));
    if (i == sections - 1)
    {
      tx2 = x2;
      ty2 = y2;
    }
    line(tx1, ty1, tx2, ty2);
    twist2[i + 1] = twist;
  }
}