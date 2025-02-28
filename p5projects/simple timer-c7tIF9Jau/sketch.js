// simple timer with millis()

let startTime;
let interval = 1000; // 1 second

function setup() {
  createCanvas(300, 300);
  startTime = millis();
}

function draw() {
  background(180);
  
  if (millis() - startTime > interval) {
    startTime = millis(); // reset
    console.log('tick');
  }
  
  textSize(64);
  textAlign(CENTER, CENTER);
  text(floor(startTime / 1000), width / 2, height / 2); 
  
}
