let nn;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  nn = new NeuralNet();
}

function draw() {
  background(255);
  buildings.forEach(b => {
    nn.train(b);
    noStroke();
    fill(b.label > 0 ? '#f00' : '#0f0')
    square(scrX(b.x), scrY(b.y), 10);
    fill(0);
    square(scrX(b.x), scrY(b.y), 1);
  });
  nn.draw();
}

class NeuralNet {
  
  constructor() {
    this.weights = [ random(-1,1), random(-1,1), random(-1,1) ];
    this.learningRate = 0.001;
  }
  
  train(pt) {
    let inputs = pt.asVec();
    let expected = pt.label;
    for (let i = 0; i < this.weights.length; i++) {
      let guess = this.classify(inputs);
      let error = pt.label - guess;
      console.log(i,error);
      // gradient descent
      this.weights[i] += (error * this.learningRate) * inputs[i];
    }
  }
  
  draw() { // draws current guess
    stroke(200);
    line(scrX(-1), scrY(this.guessY(-1)),
         scrX(1), scrY(this.guessY(1)));
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
    return sum > 0 ? 1 : 0;
  }
}