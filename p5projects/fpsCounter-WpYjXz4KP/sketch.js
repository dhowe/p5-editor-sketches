let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  if (counter == 60) {
    counter = 0;
    console.log("trigger every second");
  }
  counter++;
  textSize(50);
  text(counter, 100, 100);
}

