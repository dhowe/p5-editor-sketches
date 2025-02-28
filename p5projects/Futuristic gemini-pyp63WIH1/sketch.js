// exercise 2

function setup() {
  createCanvas(400, 400);
  //rectMode(CENTER);
}

function draw() {
  background(220);
  line(width * .5, 0, width * .5, height);
  line(0, height * .5, width, height * .5);
  circle(width * .25, height * .25, 100);
  circle(width * .75, height * .75, 50);
  rect(width * .75, height * .25, 100);
  rect(width * .25, height * .75, 50);
}