let surprise = 50; // continuous from 0-100

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeCap(SQUARE);
}

function mouseClicked() {
  surprise = random(0, 100); // choose random val
}

function draw() {
  background(255);

  eyes();
  nose();
  mouth();
  
  fill(0);
  noStroke();
  text('surprise: '+surprise, 20, height-10);
}

//////////////// features ///////////////////

function eyes() {

  stroke(0);

  // eyebrows
  strokeWeight(map(surprise, 15, 100, 15,5));
  line(width * 1 / 3, 100,
    (width / 2 - 10), map(surprise, 15, 100, 140, 80));

  strokeWeight(map(surprise, 15, 100, 9,2));
  line(width * 2 / 3, 100,
    (width / 2 + 10), map(surprise, 20, 100, 130, 70));

  // eyes
  noFill();
  strokeWeight(2);
  ellipse(width * 1 / 3, 150, 40, map(surprise, 15, 100, -10, 20));
  rect(width * 2 / 3, 150, 25, surprise / 4 + 20);

  // pupils
  fill(0);
  ellipse(width * 2 / 3, 150, 20, surprise / 2);
  strokeWeight(2);
  rect(width * 1 / 3, 150,
    map(surprise, 15, 100, 0, 30),
    map(surprise, 15, 100, 0, 40));
  fill(240);
  noStroke();
  ellipse(width * 1 / 3, 150,
    map(surprise, 100, 15, 2, 40),
    map(surprise, 15, 100, 0, 40));
  stroke(0);
}

function nose() {


  // nose
  noFill();
  let sw = map(surprise, 15, 100, 2, 8);
  strokeWeight(sw);
  line(width / 2 - 10, 180,
    (width / 2 - 10) + 15 - surprise / 50, 250);
  strokeWeight(sw / 2);
  line(width / 2 - 10, 170,
    (width / 2 - 10) + 10 - surprise / 50, 255);

  // nostrils
  strokeWeight(5);
  ellipse(width * .46, 227, map(surprise, 15, 100, 3, 10));
  strokeWeight(3);
  let sz = map(surprise, 15, 100, 7, 4);
  rect(width * .53, 230, sz / 2, sz);
}

function mouth() {

  // mouth
  strokeWeight(2);
  ellipse(width / 2 + surprise / 10 - 10, 300, 120, surprise * .35);
  strokeWeight(surprise / 10);
  ellipse(width / 2, 300, 80, surprise * .24);
  strokeWeight(surprise / 20);
  rect(width / 2, 300, 5 + 100 - surprise, surprise / 6);
}
