var x = 100,
  y = 100,
  fx = 100,
  fy = 100;

var tr, score = 0,
  msg = "",
  maxTime = 3000,
  msgFrames = 60;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  food("");
}

function food(str) {
  msg = str;
  msgFrames = 0;
  tr = millis();
  fx = random(15, width - 15);
  fy = random(45, height - 15);
}

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  if (dist(fx, fy, x, y) < 22) {

    score++;
		food("ho mei!");
      
  } else if (millis() - tr > maxTime) {

    if (--score < 0) score = 0;
    food("chor sai!");
  }

  background(245);

  fill(255, 0, 0);
  ellipse(x, y, 24, 24);

  if (++msgFrames >= 60) {
    msg = "";
    fill(0, 255, 0);
    rect(fx, fy, 20, 20);
  }

  fill(0);
  textSize(20);
  textAlign(LEFT);
  text("score=" + max(score, 0), 10, 30);

  var remaining = min((maxTime - (millis() - tr)) / 1000.0, 3);
  textAlign(RIGHT);
  text("timer=" + ceil(remaining), width - 10, 30);

  textSize(100);
  textAlign(CENTER);
  text(msg, width / 2, height / 2);
}