class NeuralNet {
  constructor() {
    this.learningRate = 0.00008;
    this.activation = (s) => (s > 0 ? 1 : -1);
    this.weights = [random(-1, 1), random(-1, 1), random(-1, 1)];
  }

  train(e, label) {
    let guess = this.classify(e);
    let error = label - guess;
    if (guess !== e.cases) errors++;
    let inputs = [e.lat, e.long, 1];
    for (let j = 0; j < this.weights.length; j++) {
      this.weights[j] += error * inputs[j] * this.learningRate;
    }
  }

  classify(e) {
    let sum = 0;
    let inputs = [e.lat, e.long, 1];
    inputs.forEach((inp, i) => (sum += inp * this.weights[i]));
    return this.activation(sum);
  }
}
