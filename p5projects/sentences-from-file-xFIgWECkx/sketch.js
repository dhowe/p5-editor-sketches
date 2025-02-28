
let loadedLines;
let currentText = "";
let interval = 1000; // 1 second

function preload() {
  loadedLines = loadStrings('sentences.txt', onLoadCallback);
}

function onLoadCallback(data) {
  loadedLines = data;
}

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);
  textSize(36);
  textFont('Arial');
  startTime = millis();
}

function draw() {
  background(0);
  fill(255);
  text(currentText, width / 2, height / 2);
  
  if (millis() - startTime > interval) {
    changeText();
    startTime = millis(); // reset
  }
}

function changeText() {
  if (loadedLines.length > 0) {
    currentText = random(loadedLines);
  }
}
