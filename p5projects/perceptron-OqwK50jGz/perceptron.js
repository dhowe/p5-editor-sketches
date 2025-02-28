class Perceptron {

  constructor(n) {
    this.lr = 0.1; // x,y,bias
    this.weights = [];
    for (let i = 0; i < n; i++) {
      this.weights.push(random(-1, 1));
    }
  }
  
  // for drawing current guess line
  guessY(x) {  // y = -w2/w1 - w0/w1 * x
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];
    return -w2/w1 - (w0/w1) * x;
  }

  activation(k) {
    return k > 0 ? 1 : -1;
  }

  train(inputs, expected) {  // gradient-descent
    
    let guess = this.classify(inputs);
    let error = expected - guess; 
    
    // adjust weights based on error
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.lr * error * inputs[i];
    }
    
    return error;
  }

  classify(inputs) {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activation(sum);
  }
}

  
class DataPoint {
  
  constructor(x, y) {
    this.inputs = [x || random(-1,1), y || random(-1,1), 1]; // x, y, bias
    this.label = f(this.inputs[0]) < this.inputs[1] ? 1 : -1;
  }
  
  draw(guess) {
    fill(200,200,0);
    stroke(0,200,0);
    strokeWeight(2);
    if (guess !== this.label) stroke(200,0,0);
    if (this.label === 1) fill(0,0,200);
    circle(px(this.inputs[0]), py(this.inputs[1]), 16);
  }
}


function px(x) {
  return map(x, -1, 1, 0, width);
}

function py(y) {
  return map(y, -1, 1, height, 0);
}

 