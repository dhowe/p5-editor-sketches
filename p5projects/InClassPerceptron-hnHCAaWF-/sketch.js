let brain, estates = [];

function setup() {
  createCanvas(400, 600);
  rectMode(CENTER);
  frameRate(5);
  textSize(30);
  
  brain = new NeuralNetwork();
  estates = Estate.create(data);
}

function draw() {
  background(220);
  
  brain.errors = 0;
  estates.forEach(e => {
    brain.train(e.toVec(), e.label);
    e.draw();
  });
  
  brain.drawCurrent();
  
  fill(0); // error count
  text(brain.errors, width-40, 30);
}
