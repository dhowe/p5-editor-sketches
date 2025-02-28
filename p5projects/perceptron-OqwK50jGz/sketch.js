let nn, training = [], idx = 0, m, b;

function setup() {

  createCanvas(400, 400);
  strokeWeight(4);
  frameRate(10);
  m = random(-1,1);
  b = random(-1,1);
  nn = new Perceptron(3);
  
  // create training data
  for (var j = 0; j < 100; j++) {
    training.push(new DataPoint());
  }
}

function draw() {
  background(220);
  stroke(0);
  
  let errors = 0;
  
  // draw our training data
  for (let i = 0; i < training.length; i++) {
    let inputs = training[i].inputs;
    let label = training[i].label;
    let guess = nn.classify(inputs);
    if (guess !== label) errors++;  
    training[i].draw(guess);
  }
  
  drawInfo();
  
  if (!errors) noLoop();
  //console.log(frameCount, errors);
  
  // one iteration of training
  for (let i = 0; i < training.length; i++) {
    nn.train(training[i].inputs, training[i].label);
  }
  
}

function drawInfo() {
  
  stroke(0);
  strokeWeight(1);
  
  // draw the target line
  //line(px(-1), py(f(-1)), px(1), py(f(1)));
  
  // draw the current guessed line
  line(px(-1), py(nn.guessY(-1)),
    px(1), py(nn.guessY(1)));
  
  // draw the text
  fill(255);
  noStroke();
  rect(width-25,0,30, 20);
  fill(0);
  text(frameCount,width-20,14);
}

function f(x) { // dividing line
  // y = mx + b
  return m * x + b;
}
  