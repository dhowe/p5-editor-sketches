let nn, m, b, training = [];

function setup() {
  createCanvas(400, 600);
  nn = new NeuralNet();
  for (let i = 0; i < 100; i++) {
	training[i] = new Point();
	nn.train(training[i]);
  }
  //console.log(JSON.stringify(training));
  let t = training.map(t => ({
    cases: t.cases, 
    lat: map(t.x,-1,1,-90,90),  
    long: map(t.y,-1,1,-180,180)
  }));

  // console.log(JSON.stringify(t, function(key, val) {
  //   //key === 'cases' &&  val.toFixed  &&console.log(key,val);
  //   //if (key === 'cases' && val.toFixed) console.log(Number(val.toFixed(3)));
  //   if (key === 'label')return;
  //   return ((key === 'lat' || key === 'long') && val.toFixed) ? Number(val.toFixed(3)) : val}));
}

function draw() {
  background(255);
  for (let i = 0; i < training.length; i++) {
    nn.train(training[i]);
	training[i].draw();
  }
  nn.draw();
}

class NeuralNet {
  
  constructor() {
    this.weights = [ random(-1,1), random(-1,1), random(-1,1) ];
    this.learningRate = 0.0001;
  }
  
  train(pt) {
    let inputs = pt.asVec();
    let expected = pt.label;
    for (let i = 0; i < this.weights.length; i++) {
      let guess = this.classify(inputs);
      let error = pt.label - guess;
      // gradient descent
      this.weights[i] += (error * this.learningRate) * inputs[i];
    }
  }
  
  draw() { // draws current guess
    stroke(200);
    line(screenX(-1), screenY(this.guessY(-1)),
         screenX(1), screenY(this.guessY(1)));
  }
  
  guessY(x) {
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];
    /*
       LINE: y = mx + b;
       xw0 + yw1 + w2 = 0;
       yw1 = -xw0 - w2;
       y = -x(w0/w1) - w2/w1;
    */
    return -x * (w0 / w1) - (w2 / w1);
  }
  
  classify(inputs) {
    let total = 0;
    for (let i = 0; i < this.weights.length; i++) {
      total += inputs[i] * this.weights[i];
    }
    return this.activation(total);
  }
  
  activation(sum) {
    return sum > 0 ? 1 : -1;
  }
}

class Point {
  constructor() {
    this.bias = 1;
    this.x = random(-1,1);
    this.y = random(-1,1);
    this.cases = floor(random(1,20));
    if (f(this.x) > this.y) this.cases = 0;
    this.label = f(this.x) > this.y ? -1 : 1;
  }
  asVec() {
    return [this.x, this.y, this.bias];
  }
  draw() {
    fill(200, 0, 0);
    if (this.label < 0) fill(0, 200, 0);
    noStroke();
    circle(screenX(this.x), screenY(this.y), 10);
  }
}

function f(x) {
  m = m || random();
  b = b || random();
  return m * x + b;
}

function screenX(x) {
  return map(x, -1, 1, 0, width);
}

function screenY(y) {
  return map(y, -1, 1, 0, height);
}