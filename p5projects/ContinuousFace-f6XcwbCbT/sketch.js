let surprise = 55; // 10-100 (anger to fear)
let slider, blink = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeCap(SQUARE);
  noStroke();

  slider = createSlider(10, 100, 100);
  slider.value(surprise); // middle
  slider.position(130, 370);
  slider.input(sliderMoved);
}

function sliderMoved() {
  surprise = slider.value();
}

function mouseClicked() {
  if (mouseY < 370) { //ignore slider
    surprise = random(0, 100);
  }
}

function draw() {
  background(255);

  labels();
  eyes();
  nose();
  mouth();

  // slightly change slider
  slider.value(surprise += random(-.5, .5));
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
  if (millis() - blink < 0) fill(0);
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

  if (random() < .007) blink = millis() + random(50, 100);
}

function nose() {

  noFill();

  // nose
  let sw = map(surprise, 15, 100, 2, 8);
  strokeWeight(sw);
  strokeCap(SQUARE);
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

function labels() {

  noStroke();
  fill(0);
  text("anger", 85, 382);
  text("fear", 290, 382);
}