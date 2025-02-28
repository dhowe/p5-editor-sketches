let bg = 0;

function setup() {
  createCanvas(400, 400);
  textSize(24);
}

let changeTime = 0;

function draw() {
  background(bg);
  if (millis() -changeTime >= 1000) {
    bg = random(255);
    changeTime = millis(); // mark when we changed
  }
}



