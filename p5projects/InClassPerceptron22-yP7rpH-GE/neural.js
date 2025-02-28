class NeuralNet {
  constructor() {
    this.learningRate = 0.01;
    this.weights = [random(),random(),random()];
  }  
  train(x,y,label) {
    let guess = classify(x,y);
    let error = guess - label;
    for (let i = 0; i < this.weights.length; i++) {
	  this.weights[i] *= error * this.learningRate;
    }
  }
  activation(num) {
    return num < 0 ? -1 : 1;
  }
  classify(x,y) {
    let sum = 0;
    let inputs = [x,y,1];
    for (let i = 0; i < this.weights.length; i++) {
	  sum += inputs[i] * this.weights[i];
    }
    return activation(sum);
  }
}
