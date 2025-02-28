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