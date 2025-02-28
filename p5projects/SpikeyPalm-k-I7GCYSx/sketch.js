let seed, n;

function setup() {
  createCanvas(400, 400);
  seed = random(1000);
  n = random(1000);
}

function draw() {
  background(255);
  randomSeed(seed);
  translate(width / 2, height+60);
  scale(1,1,1);
  branch(150); 
  n += 0.02;
}

function branch(len) {
  if (len > 3) {
    oline(0, 0, 0, -len, len/20 + random(-.5,.5));
    //line(0, 0, 0, -len);
    translate(0, -len);

    push();
    rotate(radians(map(noise(n),0,1,30,40)));    
    branch(len * random(.45,.65));
    pop();

    push();
    rotate(radians(map(noise(n+100),0,1,-30,-40)));
    branch(len * random(.45,.65));
    pop();
    
    if (random() < .4) {
      push();
      rotate(radians(map(noise(n+200),0,1,5,20)));
      branch(len * random(.45,.65));
      pop();
    }
       
    if (random() < .4) {
      push();
      rotate(radians(map(noise(n+300),0,1,-5,-20)));
      branch(len * random(.45,.65));
      pop();
    }
  }
  else {
    noStroke();
    fill(random(100),random(255),random(100),50+random(50,100));
    ellipse(0,0,len,len*random(10,20));
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