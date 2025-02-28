let lines, ts = 0, idx = 0;

function preload() {
  lines = loadStrings('NewBlood.txt');
}

function setup() {
  createCanvas(600, 200);
  textAlign(CENTER, CENTER);
  textFont("Georgia", 32);
  fill(255);
}

function draw() {
  background(0);
  if (millis() - ts > 1000) {
    ts = millis();
    idx = (idx + 1) % lines.length;
    
  }
  text(lines[idx], width/2, height/2);
}