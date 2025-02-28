let nnet, errors, locations;
let url = 'https://raw.githubusercontent.com/dhowe/sas/main/nndata.json';

function setup() {
  createCanvas(800, 600);
  loadJSON(url, dataLoaded);
  nnet = new NeuralNet(0.001);
  textSize(24);
}

function draw() {
  background(250);

  errors = 0;
  if (locations) locations.forEach(l => {
    let inputs = [l.lat, l.long, 1];
    let label = l.cases; // -1 or 1
    let guess = nnet.train(inputs, label)

    noStroke();
    fill(200, 200, 0);
    if (l.cases > 0) fill(200, 0, 200);
    if (guess !== l.cases) stroke(0);
    ellipse(screenX(l.lat), screenY(l.long), 15);
  });

  drawGuess();

  fill(0);
  text(errors, width-50, height-30);
}

function drawGuess() {
  let y1 = plot(-1);
  let y2 = plot(1);
  stroke(0);
  line(0, screenY(y1), width, screenY(y2));
}

function plot(x) {
  let [w0, w1, w2] = nnet.weights;
  let y = -x * (w0/w1) - (w2/w1);
  return y;
}

function screenX(lat) {
  return map(lat, -1, 1, 0, width);
}

function screenY(long) {
  return map(long, -1, 1, height, 0);
}

function dataLoaded(json) {
  locations = json.data;
  locations.forEach(loc => {
    loc.lat = map(loc.lat, -90, 90, -1, 1);
    loc.long = map(loc.long, -180, 180, -1, 1);
    loc.cases = loc.cases > 0 ? 1 : -1
  });
}


class NeuralNet {
  constructor(learningRate) {
    this.weights = [ random(-1,1), random(-1,1), random(-1,1) ];
    this.activation = (num) => num > 0 ? 1 : -1;
    this.learningRate = learningRate;
  }

  train(inputs, correctLabel) {

    // feed inputs into the model
    let guess = this.classify(inputs);

    // check: did it get correct answer?
    if (guess !== correctLabel) errors++;
    let error = correctLabel - guess;

    // if not, we adjust the weight to get closer
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate;
    }

    return guess;
  }

  classify(inputs) { // x,y,bias
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }
}